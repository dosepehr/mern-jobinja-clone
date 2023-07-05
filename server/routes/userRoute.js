const express = require('express');
const { signup, login, protect } = require('../controllers/authController');
const { applyOffer, addOffer } = require('../controllers/userController');

const userRoute = express.Router();

userRoute.route('/signup').post(signup);
userRoute.route('/login').post(login);
userRoute.route('/addOffer/:offerId').post(protect, applyOffer, addOffer);

module.exports = userRoute;
