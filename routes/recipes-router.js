const express = require('express')
const recipes = require('../helpers/recipes-model.js')
const router = express.Router()


// 
router.get('/', (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `There was an error retrieving recipes`})
        })
})

// 
router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params

    recipes.getIngredients(id)
        .then(ing => {
            res.status(200).json(ing)
        })
        
})

// 
router.get('/:id/instructions', (req, res) => {
    const { id } = req.params

    recipes.getInstructions(id)
        .then(ins => {
            res.status(200).json(ins)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `There was an error: ${err}`})
        })
})

// 
router.get('/ingredients/:id/recipes', (req, res) => {
    const { id } = req.params

    recipes.getInstructions(id)
        .then(ins => {
            res.status(200).json(ins)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: `There was an internal server error.`})
        })
})


module.exports = router