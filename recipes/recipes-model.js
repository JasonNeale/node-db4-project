const db = require('../data/db-config');

function getRecipes(){
    return db('recipes').select()
}

function getIngredients(recipes_id){
    return db('ingredients AS in')
        .select('in.id AS ingredient_id', 'in.name', 'in.quantity', 'in.notes', 'recipes.name AS recipes_name', 'recipes.id AS recipes_id')
        .join('recipes', 'in.recipes_id', 'recipes.id')
        .where('in.recipes_id', recipes_id)
}

function getInstructions(recipes_id){
    return db('instructions AS ins')
        .select('ins.id', 'rec.name AS recipes_name', 'ins.step_number', 'ins.description', 'ins.recipes_id')
        .join('recipes AS rec', 'ins.recipes_id', 'rec.id')
        .where('ins.recipes_id', recipes_id)
}

module.exports = {
    getRecipes,
    getIngredients,
    getInstructions
}