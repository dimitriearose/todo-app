import mongoose, { Document } from 'mongoose'
import crypto from 'crypto'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import env from '../utility/env'

export interface UserFields extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  generateResetToken: () => any
  generateAccessToken: () => string
  generateToken: () => string
  avatar: string
  resetPasswordToken: string
  resetPasswordTokenExpiryDate: any
}

const Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, 'Email address is required.'],
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value: string) => {
          return validator.isEmail(value)
        },
        message: 'You must provide a valid email address.',
      },
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
    },

    avatar: {
      type: String,
      default: 'https://i.imgur.com/0qgjgFU.png',
    },

    resetPasswordToken: {
      type: String,
    },

    resetPasswordTokenExpiryDate: {
      type: Date,
    },
  },
  { timestamps: true }
)

Schema.methods.generateResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString('hex')

  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')
  this.resetPasswordTokenExpiryDate = Date.now() + 10 * 60 * 1000

  return resetToken
}

Schema.methods.generateAccessToken = function (): string {
  const token = jwt.sign({ id: this._id }, env.JWT_ACCESS_SECRET, { expiresIn: '15m' })
  return token
}

Schema.methods.generateToken = function (): string {
  const token = jwt.sign({ id: this._id }, env.JWT_REFRESH_SECRET, { expiresIn: '7d' })
  return token
}

Schema.pre<UserFields>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})

const User = mongoose.model<UserFields>('User', Schema)

export default User
