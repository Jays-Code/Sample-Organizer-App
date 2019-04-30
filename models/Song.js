const mongoose = require('../connection')
const Schema = mongoose.Schema
//const ObjectId = mongoose.Schema.Types.ObjectId;  Will use for linking genreId to the song

//Creating Song schema
const Song = new Schema({
    artistId: String,
    songName: String,
    key: String,
    bpm: Number,
 // genreId: ObjectId   
})

//exporting the Song schema
module.exports = mongoose.model('Song', Song)