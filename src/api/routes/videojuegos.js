const { isAdmin } = require('../../middlewares/auth.middleware')
const {
  getVideoJuegos,
  postVideoJuego,
  updateVideoJuego,
  deleteVideoJuego
} = require('../controllers/videojuegos')

const videoJuegoRouter = require('express').Router()
videoJuegoRouter.get('/', getVideoJuegos)
videoJuegoRouter.post('/', postVideoJuego)
videoJuegoRouter.put('/:id', updateVideoJuego)
videoJuegoRouter.delete('/:id', [isAdmin], deleteVideoJuego)
module.exports = videoJuegoRouter
