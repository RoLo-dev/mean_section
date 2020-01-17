const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_task', {useNewUrlParser: true, useUnifiedTopology: true})

require('../models/task')