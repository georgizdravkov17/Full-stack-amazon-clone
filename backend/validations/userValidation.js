const yup = require("yup");

const registerUserSchema = yup.object({
  firstname: yup.string().min(3).max(15).required(),
  lastname: yup.string().min(3).max(15).required(),
  username: yup.string().min(6).max(20).required(),
  password: yup.string().min(8).max(25).required(),
  email: yup.string().email().required(),
})

const loginUserSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(25).required()
})

module.exports = {
    registerUserSchema, 
    loginUserSchema
};