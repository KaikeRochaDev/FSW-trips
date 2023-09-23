import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { reservationId } = request.query;

  try {
    if (!reservationId) {
      return response.status(400).json({
        message: "Missing reservationId",
      });
    }

    const reservation = await prisma.tripReservation.delete({
      where: {
        id: reservationId as string, // Certifique-se de converter para string, pois request.query pode ser indefinido
      },
    });

    return response.status(200).json(reservation);
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Error deleting reservation",
    });
  }
}
