const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const validate = require('mongoose-validator');
const moment = require('moment');

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// DATABASES ----------
mongoose.connect('mongodb://localhost/message_db', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name for message is required'], 
    minlength: [2, 'Name should be more than 2 character']},
    message: {type: String, required: [true, 'A message is required']},
    comment: [CommentSchema]
}, {timestamps:true})

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name for comment is required'], 
    minlength: [2, 'Name should be more than 2 character']},
    comment: {type: String, required: [true, 'A comment is required']}
}, {timestamps:true})

// create an object that contains methods for mongoose to interface with MongoDB
const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);

// ROUTES ------------
app.get('/', (req, res) => {
    console.log('-- RENDERING INDEX --')
    Message.find()
    .then(allMessages => {
        res.render('index', { allMessages: allMessages });
    })
    .catch(err => res.json(err))
});
app.post('/new/message/', (req, res) => {
    console.log(req.body);
    const message = new Message(req.body);
    message
    .save()
    .then(() => res.redirect('/'))
    .catch(err => {
        console.log('There is an error', err);
        for( let key in err.errors){
            req.flash('new_message', err.errors[key].message);
        }
        res.redirect('/');
    })
});
app.post('/new/comment/:message_id', (req, res) => {
    console.log('req.body:' + req.body);
    Comment.create(req.body, function(err, data) {
        if(err) {
            console.log('There is an error', err);
            for(let key in err.errors) {
                req.flash('new_comment', err.errors[key].message);
            }
            res.redirect('/');
        } else{
            Message.findOneAndUpdate(
                { _id: req.params.message_id },
                { $push: { comments: data } },
                function(err, data){
                    if(err){
                        console.log('Error finding the message', err);
                        res.redirect('/');
                    } else{
                        res.redirect('/');
                    }
                }
            )
        }
    })
});


app.listen(8000, () => console.log("listening on port 8000"));