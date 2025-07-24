const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validatopnResult} = require("express-validator");
module.exports.registerUser = async(req,res,next)=>{
//logic for registering the user
 const errors = validationResult(req);
 if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
 }
 
 const {fullname, email, password}= req.body;

 const hashedPassword = await userModel.hashPassword(password);
 const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password:hashedPassword
 }); 

 const token = user.generateAuthTokn();

 res.status(201).json({token,user});
 
}