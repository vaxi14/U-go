const captainModel = require('../models/captain.model');
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