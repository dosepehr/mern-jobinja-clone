const express = require('express');
const { createCompany } = require('../controllers/companyController');
const { restrictTo, protect } = require('../controllers/authController');
const companyRouter = express.Router();

companyRouter.use(protect, restrictTo('employer'));
companyRouter.route('/create').post(createCompany);

module.exports = companyRouter;
