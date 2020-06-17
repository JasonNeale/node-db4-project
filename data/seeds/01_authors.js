exports.seed = function(knex) {
  return knex('authors').del()
  .then(function () {
    return knex('authors').insert([
      {
        id: 1, 
        firstName: 'Jason',
        lastName: 'Gromaski',
        userName: 'SevenPlusSix',
        email: 'jg13.1980@gmail.com',
        createdAt: '1590709660',
        updatedAt: '1590709660',
      },
    ])
  })
}
