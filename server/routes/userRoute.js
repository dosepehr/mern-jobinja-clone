const express = require('express');
const { signup, login, protect } = require('../controllers/authController');
const {
    applyOffer,
    addOffer,
    getMe,
    getUser,
} = require('../controllers/userController');

const userRoute = express.Router();

userRoute.route('/signup').post(signup);
userRoute.route('/login').post(login);
userRoute.route('/addOffer/:offerId').post(protect, applyOffer, addOffer);
userRoute.get('/me', protect, getMe, getUser);
module.exports = userRoute;
