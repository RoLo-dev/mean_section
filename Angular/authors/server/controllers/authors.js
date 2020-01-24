const Author = require('mongoose').model('Author');

module.exports = {
    allAuthors(req, res){
        Author.find()
            // .sort({name: 1})
            .then(authors => {
                console.log(authors)
                res.json({authors: authors});
            })
            .catch(err => res.json(err));
    },
    singleAuthor(req, res){
        console.log('author id: ' + req.params.id);
        Author.findOne({_id: req.params.id})
            .then(author => res.json(author))
            .catch(err => {
                console.log('There is an error', err);
                for(let key in err.errors){
                    req.flash('selected_author', err.errors[key].message);
                }
                res.json(err);
            });
    },
    create(req, res){
        const author = new Author(req.body);
        author
        .save()
        .then(author => res.json(author))
        .catch(err => {
            console.log('There is an error', err);
            for(let key in err.errors){
                req.flash('new_author', err.errors[key].message);
            }
            res.json(err);
        });
    },
    update(req, res){
        console.log('updating this author ' + req.params.id);
        req.body.updated_at = Date.now();
        Author.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true })
            .then(author => res.json(author))
            .catch(err => {
                console.log('There is an error', err);
                for(let key in err.errors){
                    req.flash('update_author', err.errors[key].message);
                }
                res.json(err);
            });
    },
    delete(req, res){
        console.log('deleting this author ' + req.params.id);
        Author.deleteOne({_id: req.params.id})
            .then(() => res.json({message: 'Author is gone'}))
            .catch(err => res.json(err));
    }
};