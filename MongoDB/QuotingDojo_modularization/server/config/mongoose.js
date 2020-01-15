const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/quotes', { useNewUrlParser: true, useUnifiedTopology: true });

require('../models/quotes')