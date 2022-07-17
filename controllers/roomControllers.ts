import type { NextApiRequest, NextApiResponse } from 'next'
import rooms from '../models/rooms'

const allRooms = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    success: true,
    message: 'All rooms',
  })
}

// Create new room => /api/rooms
const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message })
  }
  const room = await rooms.create(req.body)
  res.status(200).json({ sucess: true, room })
}

export { allRooms, newRoom }
