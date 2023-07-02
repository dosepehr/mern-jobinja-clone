const express = require('express');

const companyRouter = express.Router();

companyRouter.route('/create').post();

module.exports = companyRouter;
