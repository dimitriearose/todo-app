import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import env from '../utility/env'
import User from '../models/User'
import RequestWithUser from '../types/RequestWithUser'
import DecodedUser from '../types/DecodedToken'

const authenticate = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET) as DecodedUser

    const user = await User.findOne({ _id: decoded.id })

    if (!user) {
      throw new Error('User Not Found.')
    }

    req.user = user
    req.token = token

    next()
  } catch (error) {
    res.status(401).send({ message: 'Please Authenticate.' })
  }
}

export default authenticate
