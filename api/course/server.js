const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')
//const logger = require('morgan');

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(cookieParser());
app.use(cors());
//app.use(logger("dev"));


mongoose.Promise = global.Promise;

const config = require('./config/secret');

mongoose.connect(
    config.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("Connected to mongoDB success");

}).catch(err => console.error(err.message));

const auth = require('./routes/authRoutes');

app.use('/api/chatApp', auth);

app.listen(3000, () => {
    console.log('Running on port 3000');
});
