const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe');
const Tag = require('../models/tag');

router.get('/recipe/search/:name', async (req, res) => {
    console.log(req.params.name);

    try {
      const recipes = await Recipe.find({ name: { $regex: req.params.name, $options: 'i' } });
      res.json(recipes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

//   router.get('/recipe/search/', async (req, res) => {
//     try {
//       const recipes = await Recipe.get();
//       res.json(recipes);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
  

module.exports = router