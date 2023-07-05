const mongoose = require('mongoose');

const JobOfferSchema = mongoose.Schema({
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
    },
    companyDetails: {
        type: String,
    },
    category: [{ type: String }],
    location: {
        type: String,
    },
    experience: {
        type: String,
    },
    income: {
        type: String,
    },
    type: {
        type: String,
    },
    desc: {
        type: String,
    },
    languages: [
        {
            type: String,
        },
    ],
    skills: [
        {
            type: String,
        },
    ],
    education: {
        type: String,
    },
    sex: {
        type: String,
        enum: ['مرد', 'زن', 'فرقی ندارد'],
    },
});

let JobOffer = mongoose.model('jobOffer', JobOfferSchema);

module.exports = JobOffer;
