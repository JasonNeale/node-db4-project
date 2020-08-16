exports.up = function(knex) {
    return knex.schema.createTable('authors', tbl => {
        tbl.increments()
        tbl.text('firstName').notNullable()
        tbl.text('lastName').notNullable()
        tbl.text('userName').unique().notNullable()
        tbl.text('email').unique().notNullable()
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('authors').onDelete('CASCADE')
}