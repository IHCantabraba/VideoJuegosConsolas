const VideoJuego = require('../models/videojuegos')
/* GET controller */
const getVideoJuegos = async (req, res, next) => {
  try {
    const allVideoJuegos = await VideoJuego.find()
    return res.status(200).json(allVideoJuegos)
  } catch (error) {
    return res.status(400).json(`Error while reading VideoJuegos: ${error}`)
  }
}
const postVideoJuego = async (req, res, next) => {
  try {
    const newVideoJuego = new VideoJuego(req.body)
    const savedVideoJuego = await newVideoJuego.save()
    return res
      .status(200)
      .json(`Successfully created videoJuego ➡️ ${savedVideoJuego} `)
  } catch (error) {
    return res.status(400).json(`Error while creatig VideoJuego: ${error}`)
  }
}

const updateVideoJuego = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVideoJuego = new VideoJuego(req.body)
    newVideoJuego._id = id
    const videoJuegoUpdated = await VideoJuego.findByIdAndUpdate(
      id,
      newVideoJuego
    ) /* new:true hace que videoJuegoUpdated devuelva en nuevo y no el antiguo que devuelve por defecto*/
    return res
      .status(200)
      .json(`successfully updated videoJuego ${videoJuegoUpdated}`)
  } catch (error) {
    return res.status(400).json(`Error while updating: ${error}`)
  }
}

const deleteVideoJuego = async (req, res, next) => {
  try {
    const { id } = req.params
    const videoJuegoDeleted = await VideoJuego.findByIdAndDelete(id)
    return res
      .status(200)
      .json(`Succesfully deleted videoJuego ${videoJuegoDeleted}`)
  } catch (error) {
    return res.status(400).json(`Error deleting videoJuego: ${error}`)
  }
}
module.exports = {
  getVideoJuegos,
  postVideoJuego,
  updateVideoJuego,
  deleteVideoJuego
}
