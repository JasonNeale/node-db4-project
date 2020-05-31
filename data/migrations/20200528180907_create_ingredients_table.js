exports.up = function(knex) {
    return knex.schema
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.text('title').unique().notNullable().default('N/A')
        tbl.datetime('createdAt').notNullable().default('N/A')
        tbl.datetime('updatedAt').notNullable().default('N/A')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredients')
}