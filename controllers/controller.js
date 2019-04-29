const Genre = require("../models/Genre");
const Artist = require("../models/Artist");
const Song = require("../models/Song");

const mainController = {
    genreIndex: function(req, res) {
        Genre.find().then(showGenres => {
            res.render("genres", { showGenres})
        }
            )
    }
}

module.exports = mainController