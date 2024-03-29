import type { NextApiRequest, NextApiResponse } from 'next'
import Room from '../models/rooms'
import catchAsyncErrors from '../utils/catchAsyncErrors'
import ErrorHandler from '../utils/errorHandler'
import APIFeatures from '../utils/apiFeatures'

const allRooms = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const resPerPage = 4

    const roomsCount = await Room.countDocuments()

    const apiFeatures = new APIFeatures(Room.find(), req.query)
      .search()
      .filter()

    let rooms = await apiFeatures.query
    let filteredRoomsCount = rooms.length

    apiFeatures.pagination(resPerPage)
    rooms = await apiFeatures.query.clone()

    res.status(200).json({
      success: true,
      roomsCount,
      resPerPage,
      filteredRoomsCount,
      rooms,
    })
  }
)

// Create new room => /api/rooms
const newRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const room = await Room.create(req.body)
    res.status(200).json({ success: true, room })
  }
)

// Get room details => /api/rooms/:id
const getSingleRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    const room = await Room.findById(req.query.id)

    if (!room) {
      // res
      //   .status(404)
      //   .json({ success: false, error: 'Room not found with this ID.' })
      // return next()
      return next(new ErrorHandler('Room not found with this ID.', 404))
    }

    res.status(200).json({ success: true, room })
  }
)

// Update room details => /api/rooms/:id
const updateRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    let room = await Room.findById(req.query.id)
    if (!room) {
      return next(new ErrorHandler('Room not found with this ID.', 404))
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      runValidator: true,
      useFindAndModify: false,
      returnOriginal: false,
    })

    res.status(200).json({ success: true, room })
  }
)

// Delete room details => /api/rooms/:id
const deleteRoom = catchAsyncErrors(
  async (req: NextApiRequest, res: NextApiResponse, next: any) => {
    let room = await Room.findById(req.query.id)
    if (!room) {
      next(new ErrorHandler('Room not found with this ID.', 404))
    }

    await room.remove()

    res.status(200).json({ success: true, message: 'Room is deleted' })
  }
)

export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom }
