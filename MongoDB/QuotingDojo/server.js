// Imports *****
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

// Database *****
mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true, useUnifiedTopology: true });

const QuotesSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minlength: 1},
        quote: {type: String, required: true, maxlength: 200}
    },
    { timestamps: true }
)
const Quote = mongoose.model('Quotes', QuotesSchema);

// Routes *****
app.get('/', (req, res) => {
    console.log(req.body)
    res.render('index')
});

app.post('/quotes', (req, res) => {
    console.log('POST DATA', req.body)
    const quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log("There is an error", quote.errors)
            res.render('quotes', {errors: quote.errors})
        } else{
            console.log("Quote has been added")
            res.redirect('/quotes')
        }
    })
});

app.get('/quotes', (req, res) => {
    console.log('GET quotes page')
    Quote.find({}, function(err, quotes){
        if(err){
            console.log("Error matching DB request!");
        } else{
            res.render('quotes', {quotes: quotes, moment: moment});
        }
    }).sort({_id:-1})
});

// Port *****
app.listen(8000, () => console.log("listening on port 8000"));