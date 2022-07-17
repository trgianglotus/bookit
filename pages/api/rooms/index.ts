import type { NextApiRequest, NextApiResponse } from 'next'

import { createRouter } from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { allRooms, newRoom } from '../../../controllers/roomControllers'

const router = createRouter<NextApiRequest, NextApiResponse>()

dbConnect()

router.get(allRooms)

router.post(newRoom)

export default router.handler()
