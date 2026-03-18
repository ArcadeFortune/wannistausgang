"use client";
import { useEffect, useState } from "react";
import { Treffpunkt } from "../types";

interface NextTreffpunktProps {
  treffpunkt: Treffpunkt;
  nextTreffpunkt: Treffpunkt;
}

function parseTime(timeDiff: number): { h: string, m: string, s: string; } {
  const diffInSeconds = Math.max(0, Math.floor(timeDiff / 1000));
  const h = Math.floor(diffInSeconds / 3600);
  const m = Math.floor((diffInSeconds % 3600) / 60);
  const s = diffInSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return { h: pad(h), m: pad(m), s: pad(s) };
}

function formatNextTreffpunkt(now: Date | null, treffpunkt: Date): string {
  if (!now) return "--:--:--";
  const time = parseTime(treffpunkt.getTime() - now.getTime());
  return `${time.h}:${time.m}:${time.s}`;
}

function formatNextNextTreffpunkt(treffpunkt: Date, nextTreffpunkt: Date): string {
  const time = parseTime(nextTreffpunkt.getTime() - treffpunkt.getTime());
  return `${time.h}:${time.m}:${time.s}`;
}

export default function NextTreffpunkt({ treffpunkt, nextTreffpunkt }: NextTreffpunktProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="">
        Nächster Treffpunkt ist in
      </div>
      <div className="font-bold">
        {formatNextTreffpunkt(now, treffpunkt.time)}, {treffpunkt.place}
      </div>
      <div>
        Dann {formatNextNextTreffpunkt(treffpunkt.time, nextTreffpunkt.time)} später im {nextTreffpunkt.place}
      </div>
    </>
  );
}
