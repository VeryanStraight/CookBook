const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true
    }
});

//if the tag is deleted, makes sure it is removed from all recipe tag lists
tagSchema.post('findOneAndDelete', async function(doc){
    if(doc) {
        const Recipe = mongoose.model('Recipe');
        await Recipe.updateMany(
            {tags:doc._id},
            {$pull: {tags: doc._id} }
        );
    }
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;