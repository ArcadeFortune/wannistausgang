"use client";
import { editTreffpunkt } from "@/app/actions/timetable";
import { Treffpunkt } from "@/app/generated/prisma/client";
import { pad } from "@/app/lib/utils";
import { useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function TreffpunktRows({ rows }: { rows: Treffpunkt[]; }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(0);
  const [state, formAction] = useActionState(editTreffpunkt, { error: null });

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state]);

  return (
    <>
      <tr><td>test</td></tr>
      {rows.map(t => (
        <tr>
          {t.id === isEditing ?
            <tr>
              <td colSpan={5}>
                <form action={formAction} onSubmit={() => setIsEditing(0)}>
                  {pad(t.starttime.getHours())}{pad(t.starttime.getMinutes())}-{pad(t.endtime.getHours())}{pad(t.endtime.getMinutes())}
                  {/* <TreffpunktInputs t={t} /> */}
                  IS EDIITNG...
                  <button type="submit">Save</button>
                </form>
              </td>
            </tr>
            :
            <tr >
              <td>
                {pad(t.starttime.getHours())}{pad(t.starttime.getMinutes())}-{pad(t.endtime.getHours())}{pad(t.endtime.getMinutes())}
              </td>
              <td>{t.activity}</td>
              <td>{t.responsibility}</td>
              <td>{t.place}</td>
              <td><button type="button" onClick={() => setIsEditing(t.id)}>edit</button></td>
            </tr>}
        </tr>
      ))}

      <tr>
        <td colSpan={5}>
          {isAdding && (
            <form action={formAction} onSubmit={() => setIsAdding(false)}>
              IS ASDDING...
              <button type="submit">save</button>
            </form>
          )}
          {!isAdding && <button type="button" onClick={() => setIsAdding(true)}>add</button>}
        </td>
      </tr>
    </>
  );
}
