const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
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
    role: {
        type: String,
        enum: ['user', 'employer', 'admin'],
        default: 'user',
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

UserSchema.pre('save', async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    this.confirmPassword = undefined;
    next();
});
UserSchema.methods.correctPassword = async function (
    enteredPassword,
    userPassword
) {
    return await bcrypt.compare(enteredPassword, userPassword);
};
let User = mongoose.model('user', UserSchema);

module.exports = User;
