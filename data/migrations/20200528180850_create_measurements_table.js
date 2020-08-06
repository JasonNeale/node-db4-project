exports.up = function(knex) {
    return knex.schema
    .createTable('measurements', tbl => {
        tbl.increments()
        tbl.text('measurement').unique().notNullable()
        tbl.text('abbreviation').unique().notNullable()
        tbl.datetime('createdAt').notNullable()
        tbl.datetime('updatedAt').notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('measurements')
}