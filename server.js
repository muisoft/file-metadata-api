import express from 'express';
import path from 'path'
import bodyParser from 'body-parser'

import { router } from './routes/router'

const app = express()

app.use(express.static(path.join(__dirname, 'views')))
app.use(bodyParser.json())

app.use(router)
app.listen(process.env.PORT)