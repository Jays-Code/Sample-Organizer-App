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
    },
    addSample: function (req, res) {
        res.render("addSample")
    },
    createAll: function(req, res) {
        console.log(req.body)
        Genre.create(req.body).then((genreMade)=>{
            let bodyForArtist = req.body
            bodyForArtist.genreId = genreMade._id
            Artist.create(bodyForArtist)
        }).then((infoBack) => { 
res.send(infoBack)
        })
        // Artist.create(req.body)
        // Song.create(req.body)
    
    }
    //create: function(req, res) {
       // console.log(req);
     //   Donut.create(req.body).then(() => res.redirect("/"));
   //   },
   



//    { genreName: 'hello',
//    artistName: 'world',
//    songName: 'hey',
//    bpm: 'hi',
//    key: 'whats' }

//    const Genre = new Schema({
//     genreName: String,
// })
//    const Artist = new Schema ({
//     artistName: String, 
//     genreId: ObjectId
// })
//    const Song = new Schema({
//     artistId: String,
//     songName: String,
//     key: String,
//     bpm: Number,
 

}



module.exports = mainController     