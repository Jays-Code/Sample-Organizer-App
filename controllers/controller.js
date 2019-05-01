const Genre = require("../models/Genre");
const Artist = require("../models/Artist");
const Song = require("../models/Song");

const mainController = {
    //root page
    rootPage: function(req, res) {
        res.render("rootPage")
    },
    //indexes of all genres/artists/songs
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
            res.render("Songs", { showSongs })
        })
    },
    //for single genre/artist/song
    oneGenre: function (req, res) {
        Genre.findById(req.params.id).then(genre => {
            res.render("Genre", { genre })
        })
    },
    oneArtist: function (req, res) {
        Artist.findById(req.params.id).then(artist => {
            res.render("Artist", { artist })
        })
    },
    oneSong: function (req, res) {
        Song.findById(req.params.id).then(song => {
            //res.render's first argument refers to the views path
            res.render("Song", { song })
        })
    },

    //genre functions
    addGenre: function (req, res) {
        res.render("addGenre")
    },

    newGenre: function (req, res) {
        Genre.create(req.body).then(() => { res.redirect("/Genres") })
    },
    deleteGenre: function(req, res) {
        Genre.findByIdAndRemove(req.params.id).then(() => 
            res.redirect('/Genres')
        )},
    //artist functions
    addArtist: function (req, res) {
            res.render("addArtist")
        },
    
    newArtist: function (req, res) {
            Artist.create(req.body).then(() => { res.redirect("/Artists") })
        },
    deleteArtist: function(req, res) {
            Artist.findByIdAndRemove(req.params.id).then(() => 
                res.redirect('/Artists')
            )},
    //song functions
    addSong: function (req, res) {
        res.render("addSong")
    },

    newSong: function (req, res) {
        Song.create(req.body).then(() => { res.redirect("/Songs") })
    },
    deleteSong: function(req, res) {
        Song.findByIdAndRemove(req.params.id).then(() => 
            res.redirect('/Songs')
        )},
    editSong: function(req, res) {
        Song.findById(req.params.id).then(song => {
            res.render("editSong", { song});
        })
    },
    //get clarification on this function
    updateSong: function(req, res) {
        Song.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updateSong) => {
            res.redirect('/Songs');
        })
    } 
}


module.exports = mainController

//},
/*

    createAll: function (req, res) {
        console.log(req.body)
        Genre.create(req.body).then((genreMade) => {
            let bodyForArtist = req.body
            bodyForArtist.genreId = genreMade._id
            // console.log(bodyForArtist)
            return bodyForArtist
        }).then((bodyForArtist) => {
            console.log(bodyForArtist)
            let x = Artist.create(bodyForArtist)

            console.log(x)
            let bodyForSong = bodyForArtist
            bodyForSong.artistId = x._id
            return bodyForSong, x

            console.log(bodyForSong)
            Song.create(bodyForSong)
            res.redirect("/")
        })
*/






        // Song.create(req.body)
        //     artistId: String,


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

//     songName: String,
//     key: String,
//     bpm: Number,






