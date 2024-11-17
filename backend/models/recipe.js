const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    serves:{
        type: Number,
        required: false
    },
    ingredients:[{
        ingredient: {type: String, require: true},
        amount: {type: String, required: true},
        _id: false
    }],
    instructions:{
        type: String,
        required: true
    },
    tags:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;