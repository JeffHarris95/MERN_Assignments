const Pet = require('../models/pet.model');

module.exports.createPet = (request, response) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = request.body;
    Pet.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(pet => response.json(pet))
        .catch(err => response.json(err));
}

module.exports.getAllPets = (request, response) => {
    Pet.find({})
        .then(pets => response.json(pets))
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPet => response.json(updatedPet))
        .catch(err => response.json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}