const { isAdmin } = require('../../middlewares/auth.middleware')
const {
  getConsolas,
  postConsola,
  updateConsola,
  deleteConsola
} = require('../controllers/consolas')

const consolaRouter = require('express').Router()

consolaRouter.get('/', [isAdmin], getConsolas)
consolaRouter.post('/', postConsola)
consolaRouter.put('/:id', updateConsola)
consolaRouter.delete('/:id', [isAdmin], deleteConsola)

module.exports = consolaRouter
