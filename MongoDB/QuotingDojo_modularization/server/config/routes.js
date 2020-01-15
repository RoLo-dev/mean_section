const QuoteController = require("../controllers/quotes.js")

module.exports = function(app){
    app.get('/', QuoteController.index)
    app.post('/quotes', QuoteController.quotes)
    app.get('/quotes', QuoteController.quotesPage)
}