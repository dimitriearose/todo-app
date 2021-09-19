import dotenv from 'dotenv'

dotenv.config({ path: 'src/config/config.env' })

export default {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_NAME: process.env.EMAIL_NAME,
  EMAIL_HOST: process.env.EMAIL_HOST,
  IMGUR_CLIENT_KEY: process.env.IMGUR_CLIENT_KEY,
  IMGUR_SECRET_KEY: process.env.IMGUR_SECRET_KEY,
  CLIENT_URL: process.env.CLIENT_URL,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
}
