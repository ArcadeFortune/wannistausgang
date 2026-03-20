/*
  Warnings:

  - You are about to drop the column `startime` on the `Treffpunkt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Treffpunkt" DROP COLUMN "startime",
ADD COLUMN     "responsibility" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "starttime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
