/*
  Warnings:

  - You are about to drop the column `imagesUrl` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "imagesUrl",
ADD COLUMN     "imagesURL" TEXT[],
ALTER COLUMN "locationDescription" SET DEFAULT 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minima, sed sapiente laudantium asperiores dolores possimus magnam? Voluptates laborum dicta iure eveniet. Ipsam, accusamus!';

-- AlterTable
ALTER TABLE "TripReservation" ALTER COLUMN "guests" DROP DEFAULT;
