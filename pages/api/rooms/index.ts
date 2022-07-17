import type { NextApiRequest, NextApiResponse } from "next";

import { createRouter } from "next-connect";

import { AllRooms } from "../../../controllers/roomControllers";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(AllRooms);

export default router.handler();
