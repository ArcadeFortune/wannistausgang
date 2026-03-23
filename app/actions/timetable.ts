"use server";

import { revalidatePath } from "next/cache";
import { Treffpunkt } from "../generated/prisma/client";
import { prisma } from "../lib/primsa";
import { ServerActionResult } from "../types";

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

/**
 * Edits or create a new Treffpunkt, depending on whether the ID is defined.
 * @param newTreffpunkt type Treffpunkt
 */
export async function editTreffpunkt(prevState: ServerActionResult, formData: FormData): Promise<ServerActionResult> {
  const id = formData.get("id") as string | null;

  const activity = formData.get("activity");
  const place = formData.get("place");
  const responsibility = formData.get("responsibility");

  const isString = (i: any): i is string => typeof i === "string" && i.trim().length > 0;

  if (!isString(activity) || !isString(place) || !isString(responsibility)) {
    return { error: "Incomplete Entity" };
  }

  const data = {
    // starttime,
    // endtime,
    activity,
    place,
    responsibility,
    // message: message ,
  };

  console.log("data --->", data);

  const record = id
    ? await prisma.treffpunkt.update({
      where: { id: Number(id) },
      data,
    })
    : await prisma.treffpunkt.create({ data });

  revalidatePath("/");

  return { error: null };
}
