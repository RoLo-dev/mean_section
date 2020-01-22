const express = require('express');
const app = express();
const path = require('path');

// app.set("view engine", "ejs")
app.set('view',__dirname + '/client/views')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public/dist/public')))

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(8000, () => console.log("listening on port 8000"));