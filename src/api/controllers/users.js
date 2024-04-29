const { generateToken } = require('../../utils/token')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json('error while getting all users in DB')
  }
}

const register = async (req, res, next) => {
  try {
    const user = new User({
      email: req.body.email,
      nombreUsuario: req.body.nombreUsuario,
      contraseña: req.body.contraseña,
      añoNacimiento: req.body.añoNacimiento,
      rol: req.body.rol,
      imagenPerfil: req.body.imagenPerfil
    })
    /* comprobar si existe ya ese usuario */
    const userDuplicated = await User.findOne({
      nombreUsuario: req.body.nombreUsuario
    })
    /* si existe .. */
    if (userDuplicated) {
      return res
        .status(200)
        .json(`UserNAme already exists ${req.body.nombreUsuario}`)
    }
    const userSaved = await user.save()
    return res.status(200).json(`Successfully register user: ${userSaved}`)
  } catch (error) {
    return res.status(400).json(`Error while registeing user: ${error}`)
  }
}

const login = async (req, res, next) => {
  try {
    const { nombreUsuario, contraseña } = req.body
    const user = await User.findOne({ nombreUsuario })
    if (!user) {
      return res.status(400).json('User or Password Incorrect')
    }
    if (bcrypt.compareSync(contraseña, user.contraseña)) {
      const token = generateToken(user._id, user.rol)
      return res.status(200).json({ token, user })
    } else {
      return res.status(400).json('user or password Incorrect')
    }
  } catch (error) {
    return res.status(400).json(`Error in login proccess: ${error}`)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDeleted = User.find(id)
    return res
      .status(200)
      .json({ messaje: 'User successfully deleted', userDeleted })
  } catch (error) {
    return res.status(400).json(`Something happend while deleting...: ${error}`)
  }
}

const updatUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const newUser = new User(req.body)
    newUser._id = id
    const userUpdated = await User.findByIdAndUpdate(id, newUser)
    return res.staus(200).json(`Successfully updtaed! ${userUpdated}`)
  } catch (error) {
    return res.status(400).json(`Error while updating: ${error}`)
  }
}
module.exports = { getUsers, register, login, deleteUser, updatUser }
