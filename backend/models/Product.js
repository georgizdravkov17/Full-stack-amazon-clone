const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      min: 3,
      max: 30,
      unique: true,
  },
  brand: {
    type: String,
    required: true,
    min: 3,
    max: 30
},
price: {
    type: Number,
    required: true,
    min: 1,
},
image: {
    type: String,
    required: true
},
category: {
    type: String,
    required: true
},
rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
},
description: {
    type: String,
    min: 10,
    max: 100,
    required: true
}
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema);