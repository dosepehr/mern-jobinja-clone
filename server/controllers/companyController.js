const Company = require('../models/CompanyModel');
const { createOne } = require('./handlerFactory');

exports.createCompany = createOne(Company);
