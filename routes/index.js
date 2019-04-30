const express = require('express')
const router = express.Router()
const mainController = require('../controllers/controller')



/*
router.get('/', function(request, response) {
    response.send('This is the root page; replace this placeholder with next line on index.js')
})
*/


router.get('/addGenre', mainController.addGenre)


router.get('/Genres', mainController.genreIndex)
router.get('/Artists', mainController.artistIndex)  
router.get('/Songs', mainController.songIndex)

router.get('/Genre/:id', mainController.oneGenre)
router.get('/Artist/:id', mainController.oneArtist)
router.get('/Song/:id', mainController.oneSong)

router.post('/Genres', mainController.newGenre)

//router.post('/createAll', mainController.createAll)


    


//router.get('/')

module.exports = router