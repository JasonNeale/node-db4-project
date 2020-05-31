
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('messurements').insert([
        {id: 1, measurement: 'Ounce(s)', abbreviation: 'OZ',createdAt: '1590709660', updatedAt: '1590709660'},
        {id: 2, measurement: 'Cup(s)', abbreviation: 'C',createdAt: '1590709660', updatedAt: '1590709660'},
        {id: 3, measurement: 'Teaspoon(s)', abbreviation: 'TSP',createdAt: '1590709660', updatedAt: '1590709660'}
      ]);
    });
};
