const mongoose = require('mongoose')

const videoJuegoSchema = new mongoose.Schema({
  nombre: { type: String, trim: true, required: true, unique: true },
  año: { type: Number, trim: true },
  Mayor18: { type: Boolean, trim: true, required: true },
  consola: [{ type: mongoose.Types.ObjectId, required: true, ref: 'consolas' }]
})

const VideoJuego = mongoose.model(
  'videojuegos',
  videoJuegoSchema,
  'videojuegos'
)

module.exports = VideoJuego
