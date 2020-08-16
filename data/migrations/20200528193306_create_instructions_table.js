exports.up = function(knex) {
    return knex.schema
    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.text('stepNumber').notNullable()
        tbl.text('description').notNullable()
        tbl.integer('recipeId').notNullable()
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()
        
        tbl.foreign('recipeId').references('id').inTable('recipes')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructions')
}