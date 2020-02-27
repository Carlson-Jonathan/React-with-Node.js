const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

//connect to database
const MONGODB_URI1 ='mongodb+srv://mstables:loveless@demo-tvqjh.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI1, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected!");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('tiny'));
app.use(express.static('client/build'));

app.listen(PORT, console.log(`Server is started on port ${PORT}`));
