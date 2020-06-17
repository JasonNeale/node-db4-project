
exports.seed = function(knex) {
  return knex('recipeIngredients').del()
    .then(function () {
      return knex('recipeIngredients').insert([
        {
          id: 1,
          recipeId: '1',
          description: 'flavored gelatin (do not use sugar-free gelatin)',
          amount: '3',
          measurementId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660',

        },
        {
          id: 2,
          recipeId: '1',
          description: 'envelope unflavored gelatin',
          amount: '1 1/4',
          measurementId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660',

        },
        {
          id: 3,
          recipeId: '1',
          description: 'cold water',
          amount: '1/3',
          measurementId: '2',
          createdAt: '1590709660',
          updatedAt: '1590709660',

        },
        {
          id: 4,
          recipeId: '1',
          description: ' (Optional) citric acid (for sour gummies)',
          amount: '1/2',
          measurementId: '3',
          createdAt: '1590709660',
          updatedAt: '1590709660',

        }
      ])
    })
}
