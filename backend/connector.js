const mongodb = require('mongodb');

const mongoURI = 'mongodb://127.0.0.1:27017/bookMovie'

let mongoose = require('mongoose');

const { bookMovieSchema } = require('./schema')

mongoose.connect(mongoURI, { useNewUrlParser: true})
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)




exports.connection = collection_connection;
