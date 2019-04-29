const express = require('express')
const router = express.Router()



router.get('/', function(request, response) {
    response.send('This is the root page')
})

router.get('/')

module.exports = router