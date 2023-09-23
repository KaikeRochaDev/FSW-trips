import { prisma } from "@/lib/prisma";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const reservationId = Array.isArray(req.query.reservationId)
      ? req.query.reservationId[0]
      : req.query.reservationId;

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
  } else {
    return res.status(405).end(); // Method not allowed
  }
}
