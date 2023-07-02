const catchAsync = require('../utils/catchAsync');
const User = require('../models/UserModel');

exports.signup = catchAsync(async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const newUser = await User.create({
        name,
        email,
        password,
        confirmPassword,
    });
    // TODO create and send token
});
