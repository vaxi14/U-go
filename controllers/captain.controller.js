const BlacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const blackListTokenModel = require('../models/blacklistToken.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res) => {

    const errors = validationResult(req);
    //if there are errors, return them
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //if there are no errors, proceed further
    const {fullname, email, password, vehicle} = req.body;

    //check if the captain already exists
    const isCaptainExist = await captainModel.findOne({ email });
    if( isCaptainExist) {
        return res.status(400).json({ message: 'Captain already exists' });
    }
    const hashedPassword = await captainModel.hashPassword(password);


    //create the captain using the service
    const captain =  await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vechicletype: vehicle.vechicletype
    });

    //generate the auth token for the captain
    const token = captain.generateAuthToken();

    //return the token and captain details
    res.status(201).json({ token, captain });
}
module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    //if there are errors, return them
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //if there are no errors, proceed further
    const {email, password} = req.body;
    
    //check if the captain exists
    const captain = await captainModel.findOne({ email }).select('+password');
    //if captain does not exist, return error
    if (!captain) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    //if captain exists, compare the password
    const isMatch = await captain.comparePassword(password);
    //if password does not match, return error
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    //if password matches, return the token and captain details
    const token = captain.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({ token, captain });
}
module.exports.getCaptainProfile = async (req, res) => {

    res.status(200).json({ captain: req.captain });
}
module.exports.logoutCaptain = async (req, res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await BlacklistTokenModel.create({ token });
    //clear the token from the cookie
    res.clearCookie('token');

    res.status(200).json({ message: 'Logged out successfully' });
}