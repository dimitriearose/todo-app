import { Request, Response, NextFunction } from 'express'
import ErrorResponse from '../utility/ErrorResponse'

const errorHandler = (err, req: Request, res: Response, next: NextFunction): void => {
  let error: ErrorResponse = { ...err }
  error.message = err.message

  if (err.name === 'CastingError') {
    const message = 'Resource not found'
    error = new ErrorResponse(message, 404)
  }

  if (err.code === 11000) {
    const message = 'That email address is already taken'
    error = new ErrorResponse(message, 400)
  }

  res.status(error.statusCode || 500).send({ success: false, error: error.message || 'Server Error' })
  next()
}

export default errorHandler
