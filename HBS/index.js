const express = require('express')
const app = express()
const handlebars = require("express-handlebars")

const products = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layout',
        partialsDir: __dirname + '/views/partials'
    }))

app.set('views', './views')
app.set('view engine', 'hbs')


app.get('/productos', (req, res) => {
    res.render('main', { products })
})

app.post('/productos', (req, res) => {
    products.push(req.body)
    res.redirect('/productos')
})




app.listen(8070, () => {
    console.log('Server funcionando');
})