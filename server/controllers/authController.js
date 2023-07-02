const catchAsync = require('../utils/catchAsync');
const User = require('../models/UserModel');
const createSendToken = require('../utils/createSendToken');

exports.signup = catchAsync(async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const newUser = await User.create({
        name,
        email,
        password,
        confirmPassword,
    });
    // if everything was ok,send the token
    createSendToken(newUser, 200, res);
});
