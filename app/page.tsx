import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { logout } from "./actions/ahv";
import { getDay } from "./actions/timetable";
import NextTreffpunkt from "./components/next-treffpunkt";

export default async function Home() {
  const cookieStore = await cookies();
  const AHV = cookieStore.get('AHV')?.value;
  if (!AHV) return redirect('/login');
  const data = await getDay();
  return (
    <main className="p-8 h-screen flex items-center flex-col flex-center justify-center">
      <NextTreffpunkt treffpunkt={data[0]} nextTreffpunkt={data[1]} />
    </main>
  );
}
