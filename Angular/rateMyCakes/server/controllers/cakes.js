const Cake = require('mongoose').model('Cake');
const Review = require('mongoose').model('Review');

module.exports = {
    index(req, res){
        console.log('Hello World');
        Cake.find()
            .then(cakes => {
                console.log(cakes);
                res.json({ cakes: cakes });
            })
            .catch(err => {
                res.json(err);
            });
    },
    cakeById(req, res){
        Cake.findById({_id: req.params.id})
            .then(cake => {
                console.log('got this cake: ', cake);
                res.json(cake);
            })
            .catch(err => {
                res.json(err);
            });
    },
    createCake(req, res){
        const cake = new Cake(req.body);
        cake
            .save()
            .then(cake => {
                console.log('We have a new cake');
                res.json(cake);
            })
            .catch(err => {
                console.log('There is an error', err);
                for(let key in err.errors){
                    req.flash('new_cake', err.errors[key].message);
                }
                res.json(err);
            });
    },
    createReview(req, res){
        console.log('cake id: ' + req.params.id);
        const newReview = new Review(req.body);
        console.log('We have a new review' + newReview);
        newReview
            .save()
            .then(review => {
                Cake.findOneAndUpdate(
                    { _id: req.params.id },
                    {$push: { reviews: review }}
                )
                    .then(cake => {
                        cake.updatedAt = Date.now();
                        console.log('This is the cake', cake);
                    })
                    .catch(err => {
                        console.log('There is an error', err);
                        for(let key in err.errors){
                            req.flash('cake', err.errors[key].message);
                        }
                        res.json(err);
                    });
            })
            .then(review => {
                console.log(review)
                res.json(review)
            })
            .catch(err => {
                console.log('There is an error', err);
                for(let key in err.errors){
                    req.flash('new_review', err.errors[key].message);
                }
                res.json(err);
            });
    }
};