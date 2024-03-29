import type { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'

import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from '../../../controllers/roomControllers'
import onError from '../../../middleware/errors'

const handler = nc({ onError })

dbConnect()

handler.get(getSingleRoom)

handler.put(updateRoom)

handler.delete(deleteRoom)

export default handler
