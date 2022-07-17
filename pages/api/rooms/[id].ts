import type { NextApiRequest, NextApiResponse } from 'next'

import { createRouter } from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import { getSingleRoom } from '../../../controllers/roomControllers'

const router = createRouter<NextApiRequest, NextApiResponse>()

dbConnect()

router.get(getSingleRoom)

export default router.handler()
