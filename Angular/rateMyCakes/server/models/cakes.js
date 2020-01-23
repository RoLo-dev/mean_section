const mongoose = require('mongoose');
const ReviewSchema = require(__dirname + '/review');

const CakeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Baker's name is required"],
            minlength:  [2, "Baker's name should be more than two characters"]
        },
        image: {
            type: String,
            required: [true, "URL is required"]
        },
        reviews: [ReviewSchema]
    },
    { timestamps: true }
)
mongoose.model("Cake", CakeSchema);