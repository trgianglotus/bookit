const Room = require('../models/rooms')
const dbConnect = require('../config/dbConnect')
const rooms = require('../data/rooms.json')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bookit')

const seedRooms = async () => {
  try {
    await Room.deleteMany()
    console.log('Rooms are deleted.')
    await Room.insertMany(rooms)
    console.log('All rooms are added.')
    process.exit()
  } catch (error: any) {
    console.log(error.message)
    process.exit()
  }
}

seedRooms()

export {}
