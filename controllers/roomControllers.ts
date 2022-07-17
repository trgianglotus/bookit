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

// Get room details => /api/rooms/:id
const getSingleRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const room = await Room.findById(req.query.id)
    if (!room) {
      res
        .status(404)
        .json({ success: false, error: 'Room not found with this ID.' })
    }
    res.status(200).json({ success: true, room })
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message })
  }
}

// Update room details => /api/rooms/:id
const updateRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let room = await Room.findById(req.query.id)
    if (!room) {
      res
        .status(404)
        .json({ success: false, error: 'Room not found with this ID.' })
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      runValidator: true,
      useFindAndModify: false,
      returnOriginal: false,
    })

    res.status(200).json({ success: true, room })
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message })
  }
}

// Detele room details => /api/rooms/:id
const deleteRoom = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let room = await Room.findById(req.query.id)
    if (!room) {
      res
        .status(404)
        .json({ success: false, error: 'Room not found with this ID.' })
    }

    await room.remove()

    res.status(200).json({ success: true, message: 'Room is deleted' })
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message })
  }
}

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom }
