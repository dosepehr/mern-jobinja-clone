const express = require('express');
const { createCompany } = require('../controllers/companyController');
const companyRouter = express.Router();

companyRouter.route('/create').post(createCompany);


module.exports = companyRouter;
