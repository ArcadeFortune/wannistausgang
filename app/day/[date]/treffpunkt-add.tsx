"use client";

import { useState } from "react";
import TreffpunktInputs from "./treffpunkt-inputs";
import { editTreffpunkt } from "@/app/actions/timetable";

export default function TreffpunktAdd() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <tr>
      <td colSpan={5}>
        {isAdding && (
          <form action={editTreffpunkt} onSubmit={() => setIsAdding(false)}>
            <TreffpunktInputs t={{}} />
            <button type="submit">save</button>
          </form>
        )}
        {!isAdding && <button type="button" onClick={() => setIsAdding(true)}>add</button>}
      </td>
    </tr>
  );
}
