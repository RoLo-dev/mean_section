// Routes *****
// const mongoose = require("mongoose"),
//     Quote = mongoose.model('Quotes', QuotesSchema)
module.exports = function(app){
    app.get('/', (req, res) => {
        console.log(req.body)
        res.render('index')
    })

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
}