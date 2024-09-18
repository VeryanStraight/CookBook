const mongoose = require("mongoose")

const tagsSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true
    }
});

const Tag = mongoose.model('Tag', recipeSchema);

module.exports = Tag;