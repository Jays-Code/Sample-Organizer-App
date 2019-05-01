const express = require('express')
const router = express.Router()
const mainController = require('../controllers/controller')



/* TEST for the root page
router.get('/', function(request, response) {
    response.send('This is the root page')
})
*/

router.get('/', mainController.rootPage)
router.get('/addGenre', mainController.addGenre)
router.post('/Genres', mainController.newGenre)
//router.put('/Genres/:id', mainController.editGenre)
router.delete('/Genres/:id', mainController.deleteGenre)

router.get('/addArtist', mainController.addArtist)
router.post('/Artists', mainController.newArtist)
//router.put('/Artists/:id', mainController.editGenre)
router.delete('/Artists/:id', mainController.deleteArtist)

router.get('/addSong', mainController.addSong)
router.post('/Songs', mainController.newSong)
router.put('/Songs/:id', mainController.updateSong)

router.get('/Songs/:id/edit', mainController.editSong)
router.delete('/Songs/:id', mainController.deleteSong)


router.get('/Genres', mainController.genreIndex)
router.get('/Artists', mainController.artistIndex)  
router.get('/Songs', mainController.songIndex)


router.get('/Genres/:id', mainController.oneGenre)
router.get('/Artists/:id', mainController.oneArtist)
router.get('/Songs/:id', mainController.oneSong)



//router.post('/createAll', mainController.createAll)


    


//router.get('/')

module.exports = router