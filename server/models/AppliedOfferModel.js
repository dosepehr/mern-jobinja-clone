const mongoose = require('mongoose');

const appliedOffer = mongoose.Schema({
    offer: {
        type: mongoose.Schema.ObjectId,
        ref: 'JobOffer',
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
});

appliedOffer.pre(/^find/, function (next) {
    this.populate({
        path: 'jobOffer',
    }).populate({
        path: 'user',
    });
    next();
});

let AppliedOffer = mongoose.model('appliedOffer', appliedOffer);

module.exports = AppliedOffer;
