// Imports *****
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/client/static"));

require("./server.config/mongoose.js")
require('./server/config/routes.js')(app)

// Port *****
app.listen(8000, () => console.log("listening on port 8000"));