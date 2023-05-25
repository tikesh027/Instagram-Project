const uri = 'mongodb+srv://tikeshsingh2797:kitesinthesky@cluster0.8bb0fhd.mongodb.net/?retryWrites=true&w=majority';

const express = require('express');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(userRoutes);


Mongoose.connect(uri).then((res) => {
    console.log('DB connected');
    app.listen(3000);
}).catch((err) => {
    console.log(err);
});
