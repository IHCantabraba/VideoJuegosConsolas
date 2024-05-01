const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

const generateToken = (id, rol) => {
  const payload = {
    id: id,
    rol: rol
  }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

// function decodeJWT(token) {
//   return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
// }
module.exports = {
  verifyToken,
  generateToken
}
