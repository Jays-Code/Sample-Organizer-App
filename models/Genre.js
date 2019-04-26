//requiring connection.js as 'mongoose'
const mongoose = require('../connection')
const Schema = mongoose.Schema
//const ObjectId = mongoose.Schema.Types.ObjectId; Maybe unceessary

//Creating my genre schema
const Genre = new Schema({
    genreName: String,
 // genreId: ObjectId
})


//exporting the Genre model

module.exports = mongoose.model('Genre', Genre)


