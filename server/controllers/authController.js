const catchAsync = require('../utils/catchAsync');
const User = require('../models/UserModel');
const createSendToken = require('../utils/createSendToken');
const ErrorHandler = require('../utils/errorHandler');
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

exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    //  check if email and password are provided
    if (!email || !password) {
        return next(new ErrorHandler('please provide email and password', 400));
    }
    // getting user from db based on email and compare passwords

    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new ErrorHandler('incorrect email or password', 401));
    }
    // if everything was ok,send the token
    createSendToken(user, 200, res);
});
