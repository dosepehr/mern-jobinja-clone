const dotenv = require('dotenv').config({ path: './config.env' });
const signToken = require('./signToken');
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;  active this line when the protocol is HTTPS

    res.cookie('jwt', token, cookieOptions);

    // Remove password from output
    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};

module.exports = createSendToken;
