import { cookies } from "next/headers";
import { login } from "../actions/ahv";

export default function Page() {
  return (
    <form action={login}>
      <input type="text" name="AHV" placeholder="AHV-Nummer" />
    </form>
  );
}
