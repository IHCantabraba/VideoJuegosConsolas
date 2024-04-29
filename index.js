const express = require('express')
const { connect2DB } = require('./src/config/db')
const userRouter = require('./src/api/routes/users')
const videoJuegosRouter = require('./src/api/routes/videojuegos')
const consolaRouter = require('./src/api/routes/consolas')
require('dotenv').config()
const app = express()
const PORT = 3000

app.use(express.json())

connect2DB()
app.use('/api/v1/videojuegos', videoJuegosRouter)
app.use('/api/v1/consolas', consolaRouter)
app.use('/api/v1/users', userRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT} 🤗`)
})
