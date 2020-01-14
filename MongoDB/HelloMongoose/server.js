const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

mongoose.connect('mongodb://localhost/hello_mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true}
    },
    { timestamps: true }
)
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    User.find()
        .sort({ _id: 1})
        .then( users => {
            console.log(users)
            res.render("index", { users });
        })
});

app.post('/users', (req, res) =>{
    console.log(req.body)

    User.create(req.body)
        .then(() => res.redirect('/'))
        .catch(err => { console.log(err) })
        .finally(() => res.redirect('/'))
})
app.listen(8000, () => console.log("listening on port 8000"));

