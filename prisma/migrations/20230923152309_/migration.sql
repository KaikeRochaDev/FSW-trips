/*
  Warnings:

  - You are about to drop the column `imagesURL` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "imagesURL",
ADD COLUMN     "imagesUrl" TEXT[];
