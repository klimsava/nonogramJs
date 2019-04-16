var express = require('express');
let bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const arr = ['Hello', 'world', 'test'];

app.get('/', function (req, res) {
    res.render('index', {arr: arr});
});

app.get('/create', function (req, res) {
    res.render('create');
});
app.post('/create', function (req, res) {
    arr.push(req.body.text);
    res.redirect('/');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));