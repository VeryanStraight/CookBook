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
    const recipes = await Tag.find({});
    res.json(recipes); 
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

router.delete('/recipe/:id', async (req, res) => {
  try {
    Recipe.deleteOne();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  

module.exports = router