exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.text('title').notNullable().default('N/A')
        tbl.text('description').notNullable().default('N/A')
        tbl.text('preptime').notNullable().default('N/A')
        tbl.text('cooktime').notNullable().default('N/A')
        tbl.text('yield').notNullable().default('N/A')
        tbl.binary('photo')
        tbl.integer('authorId').notNullable().default(0)
        tbl.foreign('authorId').references('id').inTable('authors')
        tbl.datetime('createdAt').notNullable().default('N/A')
        tbl.datetime('updatedAt').notNullable().default('N/A')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes')
}