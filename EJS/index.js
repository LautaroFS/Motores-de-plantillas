const exp = require('constants')
const express = require('express')
const app = express()
const PORT = 8090

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const products = []


app.get('/productos', (req, res) => {
    res.render('inicio', { products })
})

app.post('/productos', (req, res) => {
    products.push(req.body)
    res.redirect('/productos')
})

app.listen(PORT, () => {
    console.log('Server OK');
})