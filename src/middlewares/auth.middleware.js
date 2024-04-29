const jwt = require('jsonwebtoken')
const { getUsers } = require('../api/controllers/users')
const User = require('../api/models/users')
const { verifyToken } = require('../utils/token')
const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) {
    console.log('Unauthorized')
    return res.status(401).json('Unauthorized')
  }
  try {
    const decode = jwt.decode(token)
    verifyToken(token)
    const user = await User.findById(decode.id)

    if (user.rol === 'admin') {
      user.password = null
      req.user = user
      next()
    } else {
      console.log('not admin')
      return res.status(401).json('Unauthorized')
    }
    // user.password = null
    // req.user = user
    // next()
  } catch (error) {
    return res.status(401).json('Unauthoraized')
  }
}

module.exports = { isAdmin }
