const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minLength: [3, 'Name must be longer than 3 characters.']
    },
},
    {timestamps: true}
);

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;