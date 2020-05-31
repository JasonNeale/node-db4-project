exports.up = function(knex) {
    return knex.schema
    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.text('stepNumber').notNullable().default('N/A')
        tbl.text('description').notNullable().default('N/A')
        tbl.integer('recipeId').notNullable().default(0)
        tbl.foreign('recipeId').references('id').inTable('recipes')
        tbl.datetime('createdAt').notNullable().default('N/A')
        tbl.datetime('updatedAt').notNullable().default('N/A')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructions')
}