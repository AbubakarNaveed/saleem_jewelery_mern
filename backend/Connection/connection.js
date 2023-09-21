const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const mongo = process.env.Mongo

mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Mongo DB')
  })
