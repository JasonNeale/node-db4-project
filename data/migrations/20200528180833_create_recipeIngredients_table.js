exports.up = function(knex) {
    return knex.schema
    .createTable('recipeIngredients', tbl => {
        tbl.increments()
        tbl.integer('recipeId').index().references('id').inTable('recipes')
        tbl.text('description').notNullable().default('N/A')
        tbl.text('amount').notNullable().default('N/A')
        tbl.integer('measurementId').notNullable().default(0)
        tbl.foreign('measurementId').references('id').inTable('measurements')
        tbl.datetime('createdAt').notNullable().default('N/A')
        tbl.datetime('updatedAt').notNullable().default('N/A')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipeIngredients')
}