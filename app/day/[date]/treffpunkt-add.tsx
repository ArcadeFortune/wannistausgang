"use client";

import { useActionState, useEffect, useState } from "react";
import TreffpunktInputs from "./treffpunkt-inputs";
import { editTreffpunkt } from "@/app/actions/timetable";
import { toast } from "react-toastify";

export default function TreffpunktAdd() {
  const [isAdding, setIsAdding] = useState(false);
  const [state, formAction] = useActionState(editTreffpunkt, { error: null });
  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state]);
  return (
    <tr>
      <td colSpan={5}>
        {isAdding && (
          <form action={formAction} onSubmit={() => setIsAdding(false)}>
            <TreffpunktInputs t={{}} />
            <button type="submit">save</button>
          </form>
        )}
        {!isAdding && <button type="button" onClick={() => setIsAdding(true)}>add</button>}
      </td>
    </tr>
  );
}
