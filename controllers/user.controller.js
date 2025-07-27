const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const { validationResult } = require('express-validator');
const BlacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async(req, res, next) => {
    // logic for registering the user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { fullname: { firstname, lastname }, email, password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}

module.exports.loginUser = async(req, res, next) => {
    // logic for logging in the user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({ token, user });
}

module.exports.getUserProfile = async(req, res, next) => {
    // logic for getting the user profile
    res.status(200).json(req.user);
}
module.exports.logoutUser = async(req,res,next)=>{
    // logic for logging out the user
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistTokenModel.create({ token });
    res.status(200).json({message: 'User logged out successfully'});
}
