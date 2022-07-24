import { NextApiRequest, NextApiResponse } from 'next'

const onError = (err: any, req: NextApiRequest, res: NextApiResponse) => {
  err.statusCode = err.statusCode || 500

  let error = { ...err }

  error.message = err.message

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  })
}

export default onError
