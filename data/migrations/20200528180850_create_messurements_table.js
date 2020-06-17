exports.up = function(knex) {
    return knex.schema
    .createTable('measurements', tbl => {
        tbl.increments()
        tbl.text('measurement').unique().notNullable().default('N/A')
        tbl.text('abbreviation').unique().notNullable().default('N/A')
        tbl.datetime('createdAt').notNullable().default('N/A')
        tbl.datetime('updatedAt').notNullable().default('N/A')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('measurements')
}