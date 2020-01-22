const taskController = require('../controllers/task');

module.exports = function(app) {
    app.get('/tasks', taskController.index)
    app.get('/tasks/:id', taskController.taskById)
    app.post('/tasks', taskController.create)
    app.put('/tasks/:id', taskController.update)
    app.delete('/tasks/:id', taskController.delete)
}
