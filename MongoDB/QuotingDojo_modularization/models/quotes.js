const mongoose = require('mongoose')
const QuotesSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, minlength: 1},
        quote: {type: String, required: true, maxlength: 200}
    },
    { timestamps: true }
)
mongoose.model('Quotes', QuotesSchema);