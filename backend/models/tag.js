const mongoose = require("mongoose")

const tagSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true
    }
});

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