/*
  Warnings:

  - You are about to drop the column `time` on the `Treffpunkt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Treffpunkt" DROP COLUMN "time",
ADD COLUMN     "endtime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "startime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
