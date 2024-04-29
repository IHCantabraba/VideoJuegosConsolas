const Consola = require('../models/consolas')
/* GET controller */
const getConsolas = async (req, res, next) => {
  try {
    const allConsolas = await Consola.find().populate('videojuegos')
    return res.status(200).json(allConsolas)
  } catch (error) {
    return res.status(400).json(`Error while reading Consolas: ${error}`)
  }
}
const postConsola = async (req, res, next) => {
  try {
    const newConsola = new Consola(req.body)
    const savedConsola = newConsola.save()
    return res
      .status(200)
      .json(
        `Successfully created consola ➡️ ${
          (req.body.name, (await savedConsola).name)
        } `
      )
  } catch (error) {
    return res.status(400).json(`Error while creatig Consola: ${error}`)
  }
}

const updateConsola = async (req, res, next) => {
  try {
    const { id } = req.params
    const newConsola = new Consola(req.body)
    newConsola._id = id
    const consolaUpdated = await Consola.findByIdAndUpdate(id, newConsola, {
      new: true
    }) /* new:true hace que consolaupdated devuelva en nuevo y no el antiguo que devuelve por defecto*/
    return res
      .status(200)
      .json(`successfully updated consola ${consolaUpdated}`)
  } catch (error) {
    return res.status(400).json(`Error while updating: ${error}`)
  }
}

const deleteConsola = async (req, res, next) => {
  try {
    const { id } = req.params
    const consolaDeleted = await Consola.findByIdAndDelete(id)
    return res
      .status(200)
      .json(`Succesfully deleted consola ${consolaDeleted.name}`)
  } catch (error) {
    return res.status(400).json(`Error deleting consola: ${error}`)
  }
}
module.exports = {
  getConsolas,
  postConsola,
  updateConsola,
  deleteConsola
}
