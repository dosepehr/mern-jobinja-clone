const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    persianName: {
        type: String,
        required: [true, 'وارد کردن نام شرکت میباشد'],
        trim: true,
    },
    englishName: {
        type: String,
        required: [true, 'وارد کردن نام شرکت میباشد'],
        trim: true,
    },
    logo: {
        type: String,
        required: [true, 'انتخاب عکس الزامی است'],
    },
    privatePhoneNumber: {
        type: String,
        required: [true, 'شماره تماس الزامی است'],
    },
    website: {
        type: String,
        required: [true, 'آدرس وبسایت الزامی است'],
    },
    activityField: [
        {
            type: String,
            required: [true, 'زمینه کاری الزامی است'],
        },
    ],
    staffNumber: {
        type: String,
        required: [true, 'تعداد پرنسل الزامی است'],
    },
});

let Company = mongoose.model('company', CompanySchema);

module.exports = Company;
