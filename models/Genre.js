//requiring connection.js as 'mongoose'
const mongoose = require('../connection.js')
const Schema = mongoose.Schema

//Creating my genre schema
const Genre = new Schema({
    genreName: String,
})


//exporting the Genre model

module.exports = mongoose.model('Genre', Genre)


