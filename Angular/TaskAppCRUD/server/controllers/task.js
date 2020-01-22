const Task = require('mongoose').model('Task');

module.exports = {
    index(req, res){
        Task.find()
            .then(tasks => {
                res.json({ tasks: tasks })
            })
            .catch(err => {
                res.json({err})
            })
    },
    taskById(req, res){
        Task.findById({_id: req.params.id})
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                res.json({err})
            })
    },
    create(req, res){
        Task.create(req.body)
            .then(task => {
                res.json(task)
            })
            .catch((err) => {
                res.json(err)
            })
    },
    update(req, res){
        Task.findOneAndUpdate(
            {_id: req.params.id}, 
            {$set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed 
                }
            })
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                res.json(err)
            })
    },
    delete(req, res){
        Task.findOneAndDelete({_id: req.params.id})
            .then(task => {
                res.json(task)
            })
            .catch(err => {
                res.json(err)
            })
    }
}