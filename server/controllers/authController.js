const catchAsync = require('../utils/catchAsync');
const User = require('../models/UserModel');
const createSendToken = require('../utils/createSendToken');
const ErrorHandler = require('../utils/errorHandler');
const { promisify } = require('util');
const jwt=require('jsonwebtoken');

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

exports.protect = catchAsync(async (req, res, next) => {
    // getting token
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies?.jwt) {
        token = req.cookies.jwt;
    }
    if (!token) {
        return next(new ErrorHandler('you are not logged in!', 401));
    }
    // validating token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    // check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(
            new ErrorHandler(
                'the user belonging to this token does no longer exist',
                401
            )
        );
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
});

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(
                    'You do not have permission to perform this action',
                    403
                )
            );
        }

        next();
    };
};
