const userModel = require('../models/user.model');


module.exports.createUser = async({
    firstname, lastname, email, passowrd
})=>{
    if(!firstname || !email || !passowrd){
        throw new Error('All fields are required');
    } 
    //create the new user
    const user = userModel.create({
        fullname:{
            firstname, lastname
        },
        email,
        password
    });
    return user;
}