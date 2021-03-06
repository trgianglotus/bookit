import type { NextApiRequest, NextApiResponse } from 'next'

import { createRouter } from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from '../../../controllers/roomControllers'

const router = createRouter<NextApiRequest, NextApiResponse>()

dbConnect()

router.get(getSingleRoom)

router.put(updateRoom)

router.delete(deleteRoom)

export default router.handler()
