const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        min: [3, 'Name must be longer than 3 characters.']
    },
    type: {
        type: String,
        required: [true, 'Pet Type is required.'],
        min: [3, 'Pet Type must be longer than 3 characters.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        min: [3, 'Description must be longer than 3 characters.']
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
},
    {timestamps: true}
);

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;