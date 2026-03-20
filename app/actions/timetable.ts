"use server";

import { revalidatePath } from "next/cache";
import { Treffpunkt } from "../generated/prisma/client";
import { prisma } from "../lib/primsa";

export async function getDay(date: Date = new Date()): Promise<Treffpunkt[]> {
  const todayMorning = date;
  todayMorning.setHours(0, 0, 0, 0);
  const todayEvening = new Date(todayMorning);
  todayEvening.setDate(todayEvening.getDate() + 1);

  const treffpunkt = await prisma.treffpunkt.findMany({
    where: {
      AND: [
        { starttime: { gte: todayMorning } },
        // { endtime: { lte: todayEvening } },
      ],
    },
  });

  return treffpunkt;
}

export async function editTreffpunkt(newTreffpunkt: FormData) {
  const id = newTreffpunkt.get("id") as string | null;

  const data = {
    // starttime,
    // endtime,
    activity: newTreffpunkt.get("activity") as string | null ?? undefined,
    place: newTreffpunkt.get("place") as string | null ?? undefined,
    responsibility: newTreffpunkt.get("responsibility") as string | null ??
      undefined,
    // message: message ,
    // packung: {
    //   connectOrCreate: packung.map((name) => ({
    //     where: { name },
    //     create: { name },
    //   })),
    // },
  };
  console.log("data --->", data);

  const record = id
    ? await prisma.treffpunkt.update({
      where: { id: Number(id) },
      data,
    })
    : await prisma.treffpunkt.create({ data });

  revalidatePath("/");
}
