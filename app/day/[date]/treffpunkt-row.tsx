"use client";

import { editTreffpunkt } from "@/app/actions/timetable";
import { Treffpunkt } from "@/app/generated/prisma/client";
import { pad } from "@/app/lib/utils";
import { useActionState, useEffect, useState } from "react";
import TreffpunktInputs from "./treffpunkt-inputs";
import { toast } from "react-toastify";

export default function TreffpunktRow({ t }: { t: Treffpunkt; }) {
  const [state, formAction] = useActionState(editTreffpunkt, { error: null });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state]);
  if (isEditing) return (
    <tr>
      <td colSpan={5}>
        <form action={formAction} onSubmit={() => setIsEditing(false)}>
          {pad(t.starttime.getHours())}{pad(t.starttime.getMinutes())}-{pad(t.endtime.getHours())}{pad(t.endtime.getMinutes())}
          <TreffpunktInputs t={t} />
          <button type="submit">Save</button>
        </form>
      </td>
    </tr>
  );
  return (
    <tr>
      <td>
        {pad(t.starttime.getHours())}{pad(t.starttime.getMinutes())}-{pad(t.endtime.getHours())}{pad(t.endtime.getMinutes())}
      </td>
      <td>{t.activity}</td>
      <td>{t.responsibility}</td>
      <td>{t.place}</td>
      <td><button type="button" onClick={() => setIsEditing(true)}>edit</button></td>
    </tr>
  );
}
