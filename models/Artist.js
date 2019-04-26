const mongoose = require('../connection')
const Schema = mongoose.Schema

//Creating the Artist Schema

const Artist = new Schema ({
    name: String,
})

//exporting the Artist Schema
module.exports = mongoose.model('Artist', Artist)
