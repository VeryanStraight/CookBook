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
        ingredent: {type: String, require: true},
        amount: {type: String, required: true}
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