const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Author name is required'],
            minlength: [2, 'Author name should be more than 2 characters']
        }
    },
    { timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'} }
)
mongoose.model('Author', AuthorSchema);