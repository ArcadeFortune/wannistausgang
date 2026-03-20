"use client";

import { editTreffpunkt } from "@/app/actions/timetable";
import { Treffpunkt } from "@/app/generated/prisma/client";
import { pad } from "@/app/lib/utils";
import { useState } from "react";
import TreffpunktInputs from "./treffpunkt-inputs";

export default function TreffpunktRow({ t }: { t: Treffpunkt; }) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) return (
    <tr>
      <td colSpan={5}>
        <form action={editTreffpunkt} onSubmit={() => setIsEditing(false)}>
          {pad(t.starttime.getHours())}{pad(t.starttime.getMinutes())}-{pad(t.endtime.getHours())}{pad(t.endtime.getMinutes())}
          <TreffpunktInputs t={t} />
          <button type="submit">Save</button>
        </form>
      </td>
      {/* 
      <td>
      </td>

      <td>
        <input type="text" name="activity" form="treffpunkt-edit" defaultValue={t.activity} />
        {t.activity}
      </td>
      <td>
        <input type="text" name="responsibility" form="treffpunkt-edit" defaultValue={t.responsibility} />
        {t.responsibility}
      </td>
      <td>
        <input type="text" name="place" form="treffpunkt-edit" defaultValue={t.place} />
        {t.place}
      </td>
      <td><button type="submit" form="treffpunkt-edit">is edititing</button></td> */}
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
