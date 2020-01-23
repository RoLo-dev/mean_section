const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('express-flash');


app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public/dist/public')))

require('./server/config/mongoose')
require('./server/config/routes')(app)

app.listen(8000, () => console.log("listening on port 8000"));

