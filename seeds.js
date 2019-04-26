// Connect to database
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

let Genre = require('/models/Genre.js')

let Artist = require('/models/Artist.js')

let Song = require('/models/Song.js')


//finish hardcoding this data below. Make sure all variable names match up as they should
[
    {
        genreName: "Hip-hop",
        newArtist: [{
            artistName: "Tupac Shakur",
            newSongs: [{
                songName: "I Get Around"
            }]
        }]
    },
    {
        genreName: "R&B",
        newArtist: [{
            name: "Beyonce",
        }]
    }
].forEach(genre => {
    Genre.create({ genreName: genre.name })
        .then(newGenre => {
            genre.artists.forEach(artist => {
                Artist.create({ artistName: artist.name, genreId: newGenre._id})
                    .then(newArtist => {
                        artist.songs.forEach(song => {
                            Song.create({ songName: song.name, artistId: newArtist._id })
                        })
                    })
            })
        })





