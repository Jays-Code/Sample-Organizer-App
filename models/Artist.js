const mongoose = require('../connection')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

//Creating the Artist Schema

const Artist = new Schema ({
    artistName: String, 
    genreId: ObjectId
})

//exporting the Artist Schema
module.exports = mongoose.model('Artist', Artist)
