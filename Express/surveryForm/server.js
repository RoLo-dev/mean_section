const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({entended: true}));
// app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'codingdojo',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/results', (req, res) => {
    req.session.results = req.body;
    console.log(req.body);
    res.redirect("results");
});
app.get('/results', (req, res) => {
    res.render("results", { results: req.session.results });
});

app.listen(8000, () => console.log("listening on port 8000"));