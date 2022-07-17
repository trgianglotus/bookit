import type { NextApiRequest, NextApiResponse } from 'next'
import Room from '../models/rooms'

const allRooms = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const rooms = await Room.find()
    res.status(200).json({ success: true, count: rooms.length, rooms })
  } catch (error: any) {
    res.status(400).json({ succes: false, error: error.message })
  }
}

// Create new room => /api/rooms
const newRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.create(req.body)
    res.status(200).json({ sucess: true, room })
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message })
  }
}

export { allRooms, newRoom }
