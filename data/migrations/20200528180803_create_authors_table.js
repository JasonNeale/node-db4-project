exports.up = function(knex) {
    return knex.schema
    .createTable('authors', tbl => {
        tbl.increments()
        tbl.text('firstName').notNullable().default('N/A')
        tbl.text('lastName').notNullable().default('N/A')
        tbl.text('userName').unique().notNullable().default('N/A')
        tbl.text('email').unique().notNullable().default('N/A')
        tbl.datetime('createdAt').notNullable().default('N/A')
        tbl.datetime('updatedAt').notNullable().default('N/A')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('authors').onDelete('CASCADE')
}