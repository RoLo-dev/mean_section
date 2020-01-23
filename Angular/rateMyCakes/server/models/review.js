const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
    {
        rating: {
        type: Number,
        required: [true, "Rating is required"]
        },
        comment: {
        type: String,
        default: ""
        }
    },
    { timestamps: true }
);
mongoose.model("Review", ReviewSchema);
module.exports = ReviewSchema;