const express = require('express');
const {
    createOffer,
    deleteOffer,
    getAllOffers,
    getOffer,
    setOfferIds,
    updateOffer,
} = require('../controllers/jobOfferController');

const { protect, restrictTo } = require('../controllers/authController');

const OfferRouter = express.Router({ mergeParams: true });

OfferRouter.use(protect);

OfferRouter.route('/')
    .get(getAllOffers)
    .post(restrictTo('employer'), setOfferIds, createOffer);

module.exports = OfferRouter;
