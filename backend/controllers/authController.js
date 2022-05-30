require("dotenv").config();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");
const { registerUserSchema, loginUserSchema } = require("../validations/userValidation.js");

const registerUser = async (req, res) => {

    const { firstname, lastname, username, email, password } = req.body;
    
    try{
        const isUserDataValid = await registerUserSchema.validate(req.body);
    } catch(err){
        res.status(500).json(err.message);
    }

}

const loginUser = async (req, res) => {

   const { email, password } = req.body; 

  try{
     const isUserDataValid = await loginUserSchema.validate(req.body);
     if(!isUserDataValid){
         return res.status(401).json("Invalid user data!");
     }

     const user = await User.findOne({ email });

     if(!user){
        return res.status(401).json("Invalid user credentials!");
     }

     const isPasswordValid = await bcrypt.compare(password, user.password);

     if(!isPasswordValid){
        return res.status(401).json("Invalid user credentials!");
     }

     const { password, ...userInfo } = user_doc;

     res.status(200).json({user: { ...userInfo }})

  } catch(err){
      res.status(500).json(err.message);
  }
}

module.exports = {
    registerUser,
    loginUser
}