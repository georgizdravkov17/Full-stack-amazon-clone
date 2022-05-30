const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
      type: String,
      required: true,
      min: 3,
      max: 15
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 15
},
username: {
    type: String,
    required: true,
    min: 6,
    max: 20,
    unique: true
},
password: {
    type: String,
    required: true, 
    min: 8,
    max: 25
},
email: {
    type: String,
    required: true,
    unique: true
},
orders: {
    type: Array,
    default: []
},
isAdmin: {
    type: Boolean,
    default: false
}
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema);