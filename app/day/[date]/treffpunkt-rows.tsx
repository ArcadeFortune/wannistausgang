"use client";
import { editTreffpunkt } from "@/app/actions/timetable";
import { Treffpunkt } from "@/app/generated/prisma/client";
import { pad } from "@/app/lib/utils";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";
import TreffpunktInputs from "./treffpunkt-inputs";

export default function TreffpunktRows({ rows }: { rows: Treffpunkt[]; }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(0);
  const [state, formAction] = useActionState(editTreffpunkt, { error: null });

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state]);

  return (
    <>
      {rows.map(t => (
        <tr key={t.id}>
          {t.id === isEditing ?
            <td colSpan={5}>
              <form action={formAction} onSubmit={() => setIsEditing(0)}>
                {pad(t.starttime.getHours())}{pad(t.starttime.getMinutes())}-{pad(t.endtime.getHours())}{pad(t.endtime.getMinutes())}
                <TreffpunktInputs t={t} />
                <button type="submit">Save</button>
              </form>
            </td>
            :
            <>
              <td>
                {pad(t.starttime.getHours())}{pad(t.starttime.getMinutes())}-{pad(t.endtime.getHours())}{pad(t.endtime.getMinutes())}
              </td>
              <td>{t.activity}</td>
              <td>{t.responsibility}</td>
              <td>{t.place}</td>
              <td><button type="button" onClick={() => setIsEditing(t.id)}>edit</button></td>
            </>
          }
        </tr>
      ))}

      <tr>
        <td colSpan={5}>
          {isAdding && (
            <form action={formAction} onSubmit={() => setIsAdding(false)}>
              <TreffpunktInputs t={{}}/>
              <button type="submit">save</button>
            </form>
          )}
          {!isAdding && <button type="button" onClick={() => setIsAdding(true)}>add</button>}
        </td>
      </tr>
    </>
  );
}
