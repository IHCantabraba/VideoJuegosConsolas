const mongoose = require('mongoose')

const connect2DB = async () => {
  try {
    await mongoose.connect(process.env.URL_DB)
    console.log('Succesfully connected to DB 😎')
  } catch (error) {
    console.log(`Something went wrong while connecting to DB 😮‍💨: ${error}`)
  }
}

module.exports = { connect2DB }
