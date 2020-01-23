const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cakes', {useNewUrlParser: true, useUnifiedTopology: true})

require('../models/cakes')