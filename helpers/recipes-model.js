const db = require('../data/db-config');

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipeIngredients')
    .join('recipes', 'recipeIngredients.recipeId', 'recipes.id')
    .where('recipes.id', recipe_id)
    .select(
        {
            projectId: 'recipes.id',
            projectName: 'recipes.name',
            projectDescription: 'recipes.description',
            tasksId: 'ingredients.id',
            tasksDescription: 'ingredients.description',
            tasksNotes: 'ingredients.notes',
            tasksCompleted: 'ingredients.completed',
            tasksCreatedAt: 'ingredients.createdAt',
            tasksUpdatedAt: 'ingredients.updatedAt'
        }
    )
    .orderBy('ingredients.id')
}

function getInstructions(recipe_id){
    return db('instructions AS insts')
        .select('insts.id', 'rec.name AS recipes_name', 'insts.step_number', 'insts.description', 'insts.recipe_id')
        .join('recipes AS rec', 'ins.recipe_id', 'rec.id')
        .where('insts.recipeId', recipe_id)
        .orderBy('insts.step_number')
}

// function getSingleIngredientRecipes(recipe_id) {
//     return db('recipes')
// }


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}