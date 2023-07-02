const express = require('express');
const { signup, login } = require('../controllers/authController');

const userRoute = express.Router();

userRoute.route('/signup').post(signup);
userRoute.route('/login').post(login);

module.exports = userRoute;
