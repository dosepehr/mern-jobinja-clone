const mongoose = require('mongoose');

const JobOfferSchema = mongoose.Schema({
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
    },
    companyDetails: {
        type: String,
        required: true,
    },
    category: [{ type: String, required: true }],
    location: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    income: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    languages: [
        {
            type: String,
            required: true,
        },
    ],
    skills: [
        {
            type: String,
            required: true,
        },
    ],
    education: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        enum: ['مرد', 'زن', 'فرقی ندارد'],
        required: true,
    },
});

JobOfferSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'company',
    });
    next();
});

let JobOffer = mongoose.model('jobOffer', JobOfferSchema);

module.exports = JobOffer;
