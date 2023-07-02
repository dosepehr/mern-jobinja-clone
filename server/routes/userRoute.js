const express = require('express');
const { signup } = require('../controllers/authController');

const userRoute = express.Router();

userRoute.route('/signup').post(signup);

module.exports = userRoute;
