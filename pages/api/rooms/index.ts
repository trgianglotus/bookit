import type { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect'

import dbConnect from '../../../config/dbConnect'

import { allRooms, newRoom } from '../../../controllers/roomControllers'
import onError from '../../../middleware/errors'

const handler = nc({ onError })

dbConnect()

handler.get(allRooms)

handler.post(newRoom)

export default handler
