import { Treffpunkt } from "@/app/generated/prisma/client";

export default function TreffpunktInputs({ t }: { t: Partial<Treffpunkt>; }) {
  return (
    <>
      <input type="hidden" name="id" value={t.id} />
      <input name="activity" defaultValue={t.activity} />
      <input name="responsibility" defaultValue={t.responsibility} />
      <input name="place" defaultValue={t.place} />
    </>
  );
}
