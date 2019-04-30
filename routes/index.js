const express = require('express')
const router = express.Router()
const mainController = require('../controllers/controller')




router.get('/', function(request, response) {
    response.send('This is the root page; replace this placeholder with next line on index.js')
})


//router.get('/')

router.get('/genres', mainController.genreIndex)
router.get('/artists', mainController.artistIndex)
router.get('/songs', mainController.songIndex)

router.get('/genre/:id', mainController.oneGenre)
router.get('/artist/:id', mainController.oneArtist)
router.get('/song/:id', mainController.oneSong)

    


//router.get('/')

module.exports = router