const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require('express-validator');

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
module.exports.loginUser = async(req,res,next)=>{
    //logic for logging in the user
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select("+password");
    if(!user){
        return res.status(401).json({message:"Invalid emial or password"});


    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid emial or password"});
    }
    const token = user.generateAuthTokn();
    res.status(200).json({token,user});
    
}