import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export default async function DELETE(_request: Request, { params: { reservationId } }: { params: { reservationId: string } }, res: NextApiResponse) {
  if (!reservationId) {
    return res.status(400).json({ message: "Missing reservationId" });
  }

  try {
    const reservation = await prisma.tripReservation.delete({
      where: {
        id: reservationId,
      },
    });

    return res.status(200).json(reservation);
  } catch (error) {
    return res.status(500).json({ message: "Error deleting reservation" });
  }
}
