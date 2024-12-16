const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe');
const Tag = require('../models/tag');

// finds all recipes that contain a given phrase 
router.get('/recipe/search/:name', async (req, res) => {
    try {
      const recipes = await Recipe.find({ name: { $regex: req.params.name, $options: 'i' } });
      res.json(recipes); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// gets all tags from the database
router.get('/tags', async (req, res) => {
  try {
    const tags = await Tag.find({});
    res.json(tags); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// adds a new recipe to the database
router.post('/recipe', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const newRecipe = await recipe.save(); 
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add a new tag to the database
router.post('/tag', async (req, res) => {
  try {
    const tag = new Tag(req.body);
    const newTag = await tag.save();
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json({ message: err.mesage })
  }
});

// takes a list of tag id's and returns the tags
router.post('/tags/retrieve', async (req, res) => {
  try{
    const tags = await Tag.find({'_id': {$in: req.body.tagIds}});
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ massage: err.mesage })
  }
});


// deletes a recipe from the database
router.delete('/recipe/:id', async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id); 

    if (deletedRecipe.deletedCount === 0) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// deletes a tag from the database
router.delete('/tag/:id', async (req, res) =>{
  try {
      const deletedTag = await Tag.findByIdAndDelete(req.params.id);

      if (deletedTag.deletedCount === 0){
        return res.status(404).json({message: 'Tag not found'});
      }

      res.status(200).json({ maeeage: 'Tag deleted' })
  } catch (err) {
    res.status(500).json({ message: err.mesage });
  }
});

// updates a tag value
router.patch('/tag/:id', async (req, res) => {
  try {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
    if(!updatedTag){
      res.status(404).json({ message:  'Tag not found'});
    }
    res.status(200).json(updatedTag)
  } catch (err) {
    res.status(500).json({ massage: err.mesage })
  }
});

// updates a recipe
router.patch('/recipe/:id', async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
    if(!updatedRecipe){
      res.status(404).json({ message:  'Recipe not found'});
    }
    res.status(200).json(updatedRecipe)
  } catch (err) {
    res.status(500).json({ massage: err.mesage })
  }
});

  

module.exports = router