const Genre = require("../models/Genre");
const Artist = require("../models/Artist");
const Song = require("../models/Song");

const mainController = {
    genreIndex: function (req, res) {
        Genre.find().then(showGenres => {
            res.render("genres", { showGenres })
        })
    },
    artistIndex: function (req, res) {
        Artist.find().then(showArtists => {
            res.render("artists", { showArtists })
        })
    },
    songIndex: function (req, res) {
        Song.find().then(showSongs => {
            res.render("songs", { showSongs})
        })
    },
}


module.exports = mainController     