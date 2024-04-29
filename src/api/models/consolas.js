const mongoose = require('mongoose')

const consolaSchema = new mongoose.Schema({
  marca: { type: String, trim: true, required: true },
  modelo: { type: String, trim: true, required: true, unique: true },
  año: { type: String, trim: true },
  videojuegos: [{ type: mongoose.Types.ObjectId, ref: 'videojuegos' }]
})

const Consola = mongoose.model('consolas', consolaSchema, 'consolas')

module.exports = Consola
