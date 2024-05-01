const jwt = require('jsonwebtoken')
const { getUsers } = require('../api/controllers/users')
const User = require('../api/models/users')
const { verifyToken } = require('../utils/token')
const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')

  try {
    const { id } = verifyToken(token)
    const user = await User.findById(id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      console.log('not admin')
      return res.status(401).json('Unauthorized')
    }
  } catch (error) {
    return res.status(401).json('Unauthoraized')
  }
}
const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    const { id } = verifyToken(token)
    next()
  } catch (error) {
    return res.status(401).json('Unauthoraized')
  }
}
module.exports = { isAdmin, isAuth }
