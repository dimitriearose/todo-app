import express, { Request, Response, Application, NextFunction } from 'express'
import path from 'path'
import env from './utility/env'
import bodyParser from 'body-parser'
import connectDatabase from './db/db'
import userRoutes from './routes/userRoutes'
import todoRoutes from './routes/todoRoutes'
import errorHandler from './middleware/error'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import hpp from 'hpp'
import cookieParser from 'cookie-parser'

const app: Application = express()

const publicPath = path.join(__dirname + '/public')

connectDatabase()

app.disable('x-powered-by')

app.use(bodyParser.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  res.set('Access-Control-Allow-Methods', '*')
  next()
})

app.use(express.static(publicPath))

app.use(mongoSanitize())

app.use(helmet())

app.use(cookieParser())

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
})

app.use(limiter)

app.use(hpp())

app.use('/user', userRoutes)
app.use('/todo', todoRoutes)

app.use(errorHandler)

app.listen(env.PORT, () => {
  console.log(`Server is now running is ${env.NODE_ENV} mode on port ${env.PORT}`)
})
