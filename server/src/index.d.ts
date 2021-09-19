import { UserFields } from './models/User'

declare module 'express' {
  interface Request {
    user?: UserFields
  }
}
