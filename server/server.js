const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: './config.env' });

// ? middlewares
const app = express();
app.use(cors());
app.use(bodyParser.json());

// * db
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('db connected');
    })
    .catch('error in db connection');
mongoose.Promise = global.Promise;

// * server
const port = process.env.PORT || 5354;
app.listen(5000, () => {
    console.log(`server is run on port ${port}`);
});
