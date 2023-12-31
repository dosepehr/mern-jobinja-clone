const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config.env' });
const morgan = require('morgan');
const userRoute = require('./routes/userRoute');
const errorController = require('./controllers/errorController');
const companyRouter = require('./routes/companyRoute');
// ? middlewares
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// * db
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('db connected');
    })
    .catch('error in db connection');
mongoose.Promise = global.Promise;

// * routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/company', companyRouter);

app.use(errorController);

// * server
const port = process.env.PORT || 5354;
app.listen(5000, () => {
    console.log(`server is run on port ${port}`);
});
