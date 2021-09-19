import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import sendEmail, { sendSignUpEmail, sendLoginEmail } from '../utility/sendEmail'
import env from '../utility/env'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import RequestWithUser from '../types/RequestWithUser'
import DecodedUser from '../types/DecodedToken'
import crypto from 'crypto'
import FormData from 'form-data'
import sharp from 'sharp'
import axios from 'axios'

// @desc Create a new User
// @url POST /user
// @access Public
export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = new User(req.body)

    if (!user) {
      res.status(400).send({ message: 'That email is already taken.' })
      return
    }

    // ! Mail
    // await sendSignUpEmail(user.email, 'Thanks for Registering', user)

    const accessToken = user.generateResetToken()
    const refreshToken = user.generateToken()

    await user.save()

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
    })

    res.status(201).send({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
      accessToken,
    })
  } catch (error) {
    next(error)
  }
}

// @desc Login a User
// @url GET /user/login
// @access Public
export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    // ! Mail
    // await sendLoginEmail(user.email, 'Logged In', user)/

    if (!user) {
      res.status(404).send({ success: false, message: 'No User Found' })
      return
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      res.status(404).send({ success: false, message: 'Incorrect Credentials Entered' })
      return
    }

    const accessToken = user.generateResetToken()
    const refreshToken = user.generateToken()

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
    })

    res.send({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
      accessToken,
    })
  } catch (error) {
    next(error)
  }
}

// @desc Get a User by JWT
// @url GET /user
// @access Private
export const getUser = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      res.status(404).send({ success: false, message: 'User Not Found' })
      return
    }

    res.send({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
    })
  } catch (error) {
    next(error)
  }
}

// @desc Refresh Access Token which expires every 15 mins
// @url GET /user/refreshaccesstoken
// @access Public
export const refreshAccessToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { refreshToken } = req.cookies

    if (!refreshToken) {
      res.status(403).send({ success: false, message: 'Please Authenticate.' })
      return
    }

    const decodedToken = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as DecodedUser

    const user = await User.findById(decodedToken.id)

    const accessToken = user.generateAccessToken()

    if (!user) {
      res.status(401).send({ success: false, message: 'Not Authorized' })
      return
    }

    res.send({ id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, avatar: user.avatar, accessToken })
  } catch (error) {
    next(error)
  }
}

// @desc Logout (Clear Reset Token Cookie)
// @url POST /user/logout
// @access Private
export const logout = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.clearCookie('refreshToken')

    res.send({
      success: true,
      message: 'Successfully logged out.',
    })
  } catch (error) {
    next(error)
  }
}

// @desc Update a User
// @url PUT /user
// @access Private
export const updateUser = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { firstName, lastName } = req.body

    const user = await User.findById(req.user._id)

    if (!user) {
      res.status(404).send({ success: false, message: 'User Not Found' })
      return
    }

    user.firstName = firstName
    user.lastName = lastName

    const updatedUser = await user.save()

    res.send({
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    })
  } catch (error) {
    next(error)
  }
}

// @desc Delete a User
// @url DELETE /user
// @access Private
export const deleteUser = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      res.status(404).send({ success: false, message: 'User Not Found' })
      return
    }

    await user.remove()

    res.send({ success: true, message: 'User Removed' })
  } catch (error) {
    next(error)
  }
}

// @desc Update a user's password (While they are signed in)
// @url PATCH /user/password
// @access Private
export const updatePassword = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const { currentPassword, newPassword } = req.body

  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      res.status(404).send({ success: false, message: 'User Not Found' })
      return
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password)

    if (!isMatch) {
      res.status(400).send({ sucess: false, message: 'Incorrect Credentials' })
      return
    }

    user.password = newPassword

    await user.save()

    res.send({ success: true, message: 'Password Updated' })
  } catch (error) {
    next(error)
  }
}

// @desc Send an email to a user in the hopes of them resetting password (While they are not signed in)
// @url POST /user/forgotpassword
// @access Public
export const forgotPassword = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      res.status(404).send({ success: false, message: 'No User With Provided Email.' })
      return
    }

    const resetToken = user.generateResetToken()

    const resetUrl = `${env.CLIENT_URL}/${resetToken}`

    await user.save({ validateBeforeSave: false })

    // ! Mail
    // await sendEmail(user.email, 'Password Reset', resetUrl)

    res.status(200).send({ success: true, message: 'Email Sent' })
  } catch (error) {
    next(error)
  }
}

// @desc Update a user's password (While they are not signed in)
// @url PATCH /user/resetpassword/:resetToken
// @access Public
export const resetPassword = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  const resetToken = req.params.resetToken
  const { password } = req.body

  try {
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    const user = await User.findOne({ resetPasswordToken, resetPasswordTokenExpiryDate: { $gt: Date.now() } })

    if (!user) {
      res.status(404).send({ success: false, message: 'Link Expired' })
      return
    }

    user.password = password
    user.resetPasswordToken = undefined
    user.resetPasswordTokenExpiryDate = undefined

    await user.save()

    res.send({ success: true, message: 'Password Updated' })
  } catch (error) {
    next(error)
  }
}

// @desc Update a user's password (While they are not signed in)
// @url PATCH /user/resetpassword/:resetToken
// @access Public

export const updateAvatar = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      res.status(401).send({ success: false, message: 'Please Authenticate' })
      return
    }

    const image: Buffer = await sharp(req.file.buffer).resize({ width: 600, height: 600 }).png({ quality: 80 }).toBuffer()

    const file = new FormData()
    file.append('image', image)

    const config: any = {
      headers: {
        Authorization: `Client-Id ${env.IMGUR_CLIENT_KEY}`,
        ...file.getHeaders(),
      },
    }

    const response = await axios.post('https://api.imgur.com/3/upload/', file, config)

    if (!response.data) {
      res.send({ message: 'Bad Request' })
      return
    }

    user.avatar = response.data.data.link

    await user.save()

    res.send({ success: true, message: 'Avatar Changed' })
  } catch (error) {
    next(error)
  }
}
