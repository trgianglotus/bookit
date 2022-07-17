import mongoose from 'mongoose'

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  const mongoURI = process.env.DB_LOCAL_URI as string
  // const mongoOptions = {
  //   newUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: true,
  //   useCreateIndex: true,
  // } as mongoose.ConnectOptions

  mongoose
    .connect(mongoURI)
    .then((con) => console.log('Connected to database.'))
}

export default dbConnect
