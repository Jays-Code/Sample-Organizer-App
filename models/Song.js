/*
// requirements: require db/connection as 'mongoose'
const mongoose = require('../db/connection')
const Schema = mongoose.Schema
// create your donut schema:
const Donut = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
})
// export the donut model with module.exports
module.exports = mongoose.model('Donut', Donut)
*/

const mongoose = require('../conection')
const Schema = mongoose.Schema

//Creating Song schema
const Song = new Schema({
    songName: String,
    key: String,
    bpm: Number,
})

module.exports = mongoose.model('Song', Song)