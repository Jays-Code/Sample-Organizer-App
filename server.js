const express = require('express')
const app = express()
const methodOverride = require('method-override')
const routes = require('./routes/index.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use('/', (req,res) => {
    res.send("hello world");
})

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)})