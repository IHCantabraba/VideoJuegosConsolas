const { isAdmin, isAuth } = require('../../middlewares/auth.middleware')
const {
  getUsers,
  register,
  login,
  deleteUser,
  updatUser
} = require('../controllers/users')

const userRouter = require('express').Router()

userRouter.get('/', [isAdmin], getUsers)
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.delete('/:id', [isAuth], deleteUser)
userRouter.put('/:id', [isAdmin], updatUser)

module.exports = userRouter
