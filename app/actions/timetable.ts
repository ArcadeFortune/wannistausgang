import { Tenue, Treffpunkt } from "../types";

export async function getDay(): Promise<Treffpunkt[]> {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return [
    {
      time: date,
      tenue: Tenue.C,
      packung: [],
      place: "test",
      message: "tets",
    },
  ];
}
