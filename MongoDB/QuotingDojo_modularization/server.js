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

require('./server/config/routes.js')(app)

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

// Port *****
app.listen(8000, () => console.log("listening on port 8000"));