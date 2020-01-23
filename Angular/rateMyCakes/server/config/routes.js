const cakeController = require('../controllers/cakes.js');

module.exports = function(app) {
    app.get('/cakes', cakeController.index)
    app.get('/cakes/:id', cakeController.cakeById)
    app.post('/cakes', cakeController.createCake)
    app.post('/cakes', cakeController.createReview)
};
