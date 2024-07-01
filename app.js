const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 80
var bodyParser = require('body-parser')


app.set('view engine', 'ejs')
app.set('views', './views')


app.use(bodyParser.urlencoded({ extended: false}))
app.get('/', (req, res) => {
    res.render('homepage')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/sign', (req, res) => {
    res.render('sign')
})

app.get('/main', (req, res) => {
    res.render('main')
})

app.post('/contact', (req, res) => {
    const email = req.body.email;
    const pw = req.body.pw;

    var a = `${email} ${pw}`

    res.send(`이메일 : ${email} 비번 : ${pw}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})