const { isAdmin, isAuth } = require('../../middlewares/auth.middleware')
const {
  getConsolas,
  postConsola,
  updateConsola,
  deleteConsola
} = require('../controllers/consolas')

const consolaRouter = require('express').Router()

consolaRouter.get('/', [isAuth], getConsolas)
consolaRouter.post('/', [isAuth], postConsola)
consolaRouter.put('/:id', updateConsola)
consolaRouter.delete('/:id', [isAdmin], deleteConsola)

module.exports = consolaRouter
