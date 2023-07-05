const AppliedOffer = require('../models/AppliedOfferModel');

const { createOne } = require('./handlerFactory');

exports.applyOffer = (req, res, next) => {
    if (!req.body.offer) req.body.offer = req.params.offerId;
    if (!req.body.user) req.body.user = req.user.id;
    next();
};
exports.addOffer = createOne(AppliedOffer);
