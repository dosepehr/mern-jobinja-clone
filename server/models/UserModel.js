const mongoose = require('mongoose');
const validator = require('validator');
const UserShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'وارد کردن نام الزامی میباشد'],
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'وارد کردن ایمیل الزامی میباشد'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'ایمیل معتبر نیست'],
    },
    password: {
        type: String,
        required: [true],
        trim: true,
        minLength: 8,
        select: false,
    },
    confirmPassword: {
        type: String,
        required: [true, 'لطفا رمز عبور خود را تایید کنید'],
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'عدم تطابق با رمز عبور',
        },
    },
});

let User = mongoose.model('user', UserShema);

module.exports = User;
