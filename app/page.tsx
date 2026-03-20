import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logout } from "./actions/ahv";
import { getDay } from "./actions/timetable";
import NextTreffpunkt from "./components/next-treffpunkt";
import Link from "next/link";

export default async function Home() {
  const cookieStore = await cookies();
  const AHV = cookieStore.get('AHV')?.value;
  if (!AHV) return redirect('/login');
  const data = await getDay();
  const now = new Date();
  let treffpunktIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].starttime.getTime() > now.getTime()) {
      treffpunktIndex = i;
      break;
    }
  }
  if (!treffpunktIndex) {
    //pass
  }
  return (
    <main className="p-8 h-screen flex items-center flex-col flex-center justify-center">
      <NextTreffpunkt treffpunkt={data[treffpunktIndex]} nextTreffpunkt={data[treffpunktIndex + 1]} />
      <Link href={`/day/${now.toISOString().split("T")[0]}`}>tagesbefehl</Link>
      <button onClick={logout}>logout</button>
    </main>
  );
}
