const JobOffer = require('../models/JobOfferModel');
const asyncHandler = require('../utils/catchAsync');
const {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} = require('./handlerFactory');

exports.setOfferIds = (req, res, next) => {
    if (!req.body.company) req.body.company = req.params.companyId;
    next();
};

exports.getAllOffers = getAll(JobOffer);
exports.getOffer = getOne(JobOffer);
exports.createOffer = createOne(JobOffer);
exports.updateOffer = updateOne(JobOffer);
exports.deleteOffer = deleteOne(JobOffer);
