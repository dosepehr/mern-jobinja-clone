const AppliedOffer = require('../models/AppliedOfferModel');
const User = require('../models/UserModel');

const { createOne, getOne } = require('./handlerFactory');

exports.applyOffer = (req, res, next) => {
    if (!req.body.offer) req.body.offer = req.params.offerId;
    if (!req.body.user) req.body.user = req.user.id;
    next();
};

exports.getMe = (req, res, next) => {
    req.params.id = req.user.id;
    next();
};
exports.getUser = getOne(User);

exports.addOffer = createOne(AppliedOffer);
