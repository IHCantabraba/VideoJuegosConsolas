const { isAdmin, isAuth } = require('../../middlewares/auth.middleware')
const {
  getVideoJuegos,
  postVideoJuego,
  updateVideoJuego,
  deleteVideoJuego
} = require('../controllers/videojuegos')

const videoJuegoRouter = require('express').Router()
videoJuegoRouter.get('/', [isAuth], getVideoJuegos)
videoJuegoRouter.post('/', [isAuth], postVideoJuego)
videoJuegoRouter.put('/:id', [isAuth], updateVideoJuego)
videoJuegoRouter.delete('/:id', [isAdmin], deleteVideoJuego)
module.exports = videoJuegoRouter
