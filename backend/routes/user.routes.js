const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require("../controllers/user.controller");


router.post('/register', [
    body('email').isEmail().withMessage('Inavlid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 charcters long'),
    body('password').isLength({min: 6}).withMessage('Passowrd must be at least 6 character long')
],

userController.registerUser)



module.exports = router;