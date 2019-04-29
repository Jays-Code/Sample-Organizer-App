// Connect to database
let mongoose = require('mongoose');
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/SampleBuddy');
}
mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
}
);
mongoose.connection.once('open', function () {
    console.log("Mongoose has connected to MongoDB!");
});

let Genre = require('./models/Genre.js')

let Artist = require('./models/Artist.js')

let Song = require('./models/Song.js')


//finish hardcoding this data below. Make sure all variable names match up as they should


let allMusic = 
[
    {
        genreName: "Hip-hop",
        newArtists: [{
            artistName: "Tupac Shakur",
            newSongs: [{
                songName: ["I Get Around", "Dear Mama"]
            }]
        },
        {
            artistName: "Notorious BIG",
            newSongs: [{
                songName: ["I Get Around", "Dear Mama"]
            }]
        }]
    },
    {
        genreName: "R&B",
        newArtists: [{
            artistName: "Beyonce",
            newSongs: [{
                songName: ["Irreplaceable", "Drunk in Love"]
            }]
        }]
    }

]

allMusic.forEach(genre => {
    Genre.create({ genreName: genre.genreName })
        .then(newGenre => {
            genre.artists.forEach(artist => {
                Artist.create({ artistName: artist.artistName, genreId: newGenre._id })
                    .then(newArtists => {
                        artist.songs.forEach(song => {
                            Song.create({ songName: song.songName, artistId: newArtists._id })
                        })
                    })
            })
        })
})
