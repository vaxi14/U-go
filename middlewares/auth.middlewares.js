const user = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

module.exports.authUser = async (req, res, next) => {
    // Middleware to authenticate user (will get token either from cookies or headers and verify it)
    // If token is valid, proceed to the next middleware or route handler
    // If token is invalid, send an error response (401 Unauthorized
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: 'Unauthoorized access'});
    }
    const isBlackListed = await userModel.findOne({token: token});

    if(isBlackListed){
        return res.status(401).json({message: 'Token is blacklisted'});
    }
    //if we get a token we will decode it 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)//find user by id
        req.user = user;
        return next();
    } catch (error) { 
        return res.status(401).json({message: 'Invalid token'});
    }
}