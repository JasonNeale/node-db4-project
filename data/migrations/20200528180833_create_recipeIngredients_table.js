exports.up = function(knex) {
    return knex.schema
    .createTable('recipeIngredients', tbl => {
        tbl.increments()
        tbl.integer('recipeId').notNullable()
        tbl.integer('measurementId').notNullable()
        tbl.text('description').unique().notNullable()
        tbl.text('amount').notNullable()
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()

        tbl.foreign('recipeId').references('id').inTable('recipes')
        tbl.foreign('measurementId').references('id').inTable('measurements')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipeIngredients')
}