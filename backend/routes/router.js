const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe');
const Tag = require('../models/tag');

router.get('/recipe/search/:name', async (req, res) => {
    try {
      const recipes = await Recipe.find({ name: { $regex: req.params.name, $options: 'i' } });
      res.json(recipes); 
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

router.get('/tags', async (req, res) => {
  try {
    const tags = await Tag.find({});
    res.json(tags); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/recipe', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const newRecipe = await recipe.save(); 
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/tag', async (req, res) => {
  try {
    const tag = new Tag(req.body);
    const newTag = await tag.save();
    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json({ message: err.mesage })
  }
});

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

router.post('/tags/retrieve', async (req, res) => {
  try{
    const tags = await Tag.find({'_id': {$in: req.body.tagIds}});
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ massage: err.mesage })
  }
});

  

module.exports = router