const captainModel = require("../models/captain.model");

module.exports.createCaptain = async({
    firstname, lastname, email, password, color, plate,capacity, vechicletype
}) => {
    if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vechicletype) {
        throw new Error("All fields are required");
    }
    //if all are present, then create the captain
    const captain = await captainModel.create({
    fullname: {
        firstname,
        lastname
    },
    email,
    password,
    vehicle: {  
        color,
        plate,
        capacity,
        vechicletype
    }
});

    //return the created captain
    return captain;
}