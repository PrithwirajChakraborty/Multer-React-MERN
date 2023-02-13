'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://user:123@cluster0.j6jrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}