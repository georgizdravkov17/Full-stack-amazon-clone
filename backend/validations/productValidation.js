const yup = require("yup");

const productSchema = yup.object({
  name: yup.string().min(3).max(30).required(),
  brand: yup.string().min(3).max(30).required(),
  price: yup.number().min(1).required(),
  image: yup.string().required(),
  category: yup.string().required(),
  rating: yup.number().min(0).max(5).required(),
  description: yup.string().min(10).max(100).required()
})

module.exports = productSchema;