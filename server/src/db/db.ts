import mongoose from 'mongoose'
import env from '../utility/env'

export default function connectDatabas(): void {
  mongoose.connect(env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
}
