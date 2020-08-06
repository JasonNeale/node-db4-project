exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.text('title').notNullable()
        tbl.text('description').notNullable()
        tbl.text('preptime').notNullable()
        tbl.text('cooktime').notNullable()
        tbl.text('yield').notNullable()
        tbl.binary('photo')
        tbl.integer('authorId').notNullable()
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()
        
        tbl.foreign('authorId').references('id').inTable('authors')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes')
}