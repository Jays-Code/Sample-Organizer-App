const Genre = require("../models/Genre");
const Artist = require("../models/Artist");
const Song = require("../models/Song");

const mainController = {
    genreIndex: function (req, res) {
        Genre.find().then(showGenres => {
            res.render("Genres", { showGenres })
        })
    },
    artistIndex: function (req, res) {
        Artist.find().then(showArtists => {
            res.render("Artists", { showArtists })
        })
    },
    songIndex: function (req, res) {
        Song.find().then(showSongs => {
            res.render("Songs", { showSongs})
        })
    },
    oneGenre: function (req, res) {
        Genre.findById(req.params.id).then(genre => {
            res.render("Genre", { genre})
            })
    },
    oneArtist: function (req, res) {
        Artist.findById(req.params.id).then(artist => {
            res.render("Artist", { artist})
        })
    },
    oneSong: function (req, res) {
        Song.findById(req.params.id).then(song => {
            //res.render's first argument refers to the views path
            res.render("Song", { song})
        })
    }
}


module.exports = mainController     