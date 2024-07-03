import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import chalk from 'chalk'
import { handler } from './handler'
import { loggy } from './loggy'
import { serverPort as port } from '../../constants'

// -----------------------
// data
// -----------------------
dotenv.config()
const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'
const appName = chalk.hex('#1877f2')('[🦜🔗] ')

// -----------------------
// express app
// -----------------------
const app = express()
app.use(express.json())

// -----------------------
// cors
// -----------------------
app.use(cors())

// -----------------------
// routes
// -----------------------
app.post('/api/ask', (req: Request, res: Response) => handler(req, res, 'kb'))

// -----------------------
// ping / keepalive
// -----------------------
app.get('/api/resuscitate', (req: Request, res: Response) => {
  loggy(appName + 'resuscitate')
  res.send('breathing')
})

// -----------------------
// start listening
// -----------------------
app.listen(port, () =>
  loggy(appName + (isProd ? `Listening on port ${port}` : `Listening on http://localhost:${port}`)),
)
