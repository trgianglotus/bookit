import type { NextApiRequest, NextApiResponse } from "next";

const AllRooms = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: "All rooms",
  });
};

export { AllRooms };
