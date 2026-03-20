-- CreateEnum
CREATE TYPE "Tenue" AS ENUM ('A', 'B', 'C', 'Sport', 'Zivil');

-- CreateEnum
CREATE TYPE "Packung" AS ENUM ('GTE', 'Weapon', 'KaRuSa', 'TaRuSa', 'EffTasche');

-- CreateTable
CREATE TABLE "Treffpunkt" (
    "id" SERIAL NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "place" TEXT NOT NULL,
    "tenue" "Tenue",
    "packung" "Packung"[],
    "message" TEXT,

    CONSTRAINT "Treffpunkt_pkey" PRIMARY KEY ("id")
);
