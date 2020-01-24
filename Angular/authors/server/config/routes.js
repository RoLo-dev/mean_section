const authorController = require('../controllers/authors');
const path = require('path');

module.exports = function(app){
    app.get('/authors', authorController.allAuthors);
    app.get('/authors/:id', authorController.singleAuthor);
    app.post('/authors', authorController.create);
    app.put('/authors/:id', authorController.update);
    app.delete('/authors/:id', authorController.delete);
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
};