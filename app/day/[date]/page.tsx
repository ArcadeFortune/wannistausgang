import { editTreffpunkt, getDay } from "@/app/actions/timetable";
import TreffpunktRow from "./treffpunkt-row";
import TreffpunktAdd from "./treffpunkt-add";

export default async function Tagesbefehl({ params }: { params: Promise<{ date: string; }>; }) {
  const { date } = await params;
  const treffpunkte = await getDay(new Date("2024-01-02T00:00:00.000Z"));
  // const treffpunkte = await getDay(new Date());

  return (
    <>
      <h1>tagesbefehl für: {date} | Version 1.0 </h1>

      <form action={editTreffpunkt} id="treffpunkt-edit"></form>
      <table>
        <thead>
          <tr>
            <th>
              Zeit
            </th>
            <th>Tätigkeiten</th>
            <th>Verantwortlicher</th>
            <th>Wo:</th>
          </tr>
        </thead>
        <tbody>
          {treffpunkte.map(t => (
            <TreffpunktRow t={t} key={t.id} />
          ))}
          <TreffpunktAdd />
        </tbody>
      </table>
    </>
  );
}

