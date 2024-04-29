const jwt = require('jsonwebtoken')

const verifyToken = async (token) => {
  const response = jwt.verify(token, process.env.JWT_SECRET)
  return response
}

const generateToken = (id, rol) => {
  const payload = {
    id: id,
    rol: rol
  }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '10h'
  })
}

// function decodeJWT(token) {
//   return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
// }
module.exports = {
  verifyToken,
  generateToken
}
