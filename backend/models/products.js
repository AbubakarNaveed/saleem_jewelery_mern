const { Schema, model } = require('mongoose')

const product_schema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  imagePath: { type: String, required: true },
  imageName: { type: String, required: true },
  date: { type: Date, required: true },
  detail: { type: String, required: true },
})

module.exports = model('products', product_schema)
