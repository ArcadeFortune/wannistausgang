-- AlterTable
ALTER TABLE "Treffpunkt" ADD COLUMN     "activity" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "place" SET DEFAULT '',
ALTER COLUMN "tenue" SET DEFAULT 'C',
ALTER COLUMN "packung" SET DEFAULT ARRAY[]::"Packung"[];
