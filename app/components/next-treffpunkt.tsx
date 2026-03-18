"use client";
import { useEffect, useState } from "react";
import { Treffpunkt } from "../types";

interface NextTreffpunktProps {
  treffpunkt: Treffpunkt;
  nextTreffpunkt: Treffpunkt;
}

export default function NextTreffpunkt({ treffpunkt, nextTreffpunkt }: NextTreffpunktProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  let hours = "--",
    minutes = "--",
    seconds = "--";
  if (now) {
    const difference = treffpunkt.time.getTime() - now.getTime();
    const diffInSeconds = Math.max(0, Math.floor(difference / 1000));
    const h = Math.floor(diffInSeconds / 3600);
    const m = Math.floor((diffInSeconds % 3600) / 60);
    const s = diffInSeconds % 60;
    const pad = (n: number) => String(n).padStart(2, "0");
    hours = pad(h);
    minutes = pad(m);
    seconds = pad(s);
  }

  return (
    <>
      <div className="">
        Nächster Treffpunkt ist in
      </div>
      <div className="font-bold">
        {hours}:{minutes}:{seconds}, {treffpunkt.place}
      </div>
      <div>
        Dann nach {nextTreffpunkt.time.toDateString()} im {nextTreffpunkt.place}
      </div>
      <div>{now ? now.toISOString() : ""}</div>
    </>
  );
}
