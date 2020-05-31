exports.seed = function(knex) {
  return knex('recipes').del()
  .then(function () {
    return knex('recipes').insert([
      {
        id: 1,
        title: 'Homemade Gummy Bears',
        description: 'If you are a fan of gummy bears, making your own is a fun way to enjoy these chewy, colorful candies any time. (It also means your homemade gummy bears have fewer preservatives.) This gummy bear recipe is simple to make: All you need to get started are three ingredients, an inexpensive bear-shaped candy mold (easily purchased online), and nonstick cooking spray. If you like a little sour with your sweet, you can easily turn those gummies into sour gummies with the addition of a bit of citric acid.',
        preptime: '35 mins',
        cooktime: '0',
        yield: '14 gummy bears',
        photo: '',
        authorId: '1',
        createdAt: '1590709660',
        updatedAt: '1590709660',
      }
    ])
  })
}