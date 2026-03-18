import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function isAHVValid(AHV: FormDataEntryValue | null): AHV is string {
  return typeof AHV === "string" && AHV.trim().length > 0;
}

export async function login(formData: FormData) {
  "use server";
  const AHV = formData.get("AHV");
  if (!isAHVValid(AHV)) {
    return;
  }
  const cookieStore = await cookies();
  cookieStore.set("AHV", AHV);
  redirect("/");
}

export async function logout() {
  "use server";
  const cookieStore = await cookies();
  cookieStore.delete("AHV");
}
