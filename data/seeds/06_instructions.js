exports.seed = function(knex) {
  return knex('instructions').del()
    .then(function () {
      return knex('instructions').insert([
        {
          id: 1,
          stepNumber: '1',
          description: 'Gather the ingredients.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '2',
          description: 'Spray a paper towel with nonstick cooking spray, then rub it lightly around the bear cavities in the mold to coat them with a thin layer of oil.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '3',
          description: 'In a small bowl, combine both gelatins and the cold water.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '4',
          description: 'Whisk them together, then let them sit at room temperature for 10 minutes to allow the gelatin to soak up the water and soften.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '5',
          description: 'Place the bowl in the microwave and cook for 30 seconds, then whisk well. Microwave for another 30 seconds and stir. The sugar should be dissolved and the mixture clear and well-mixed. If not, microwave for another 10 to 15 seconds until all of the sugar and gelatin have dissolved into the water. Then pour it into a measuring cup with a spout.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '6',
          description: 'Pour the gelatin into the cavities. You should get about 14 (1 1/2-inch) bears from this recipe.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '7',
          description: 'Place the candy mold in the refrigerator for about 20 minutes to set the gelatin.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '8',
          description: 'To remove the bears, carefully push the sides away from the edges and toward the center, then pull them up and out of the molds. Repeat with other colors and flavors of gelatin, as desired.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
        {
          id: 1,
          stepNumber: '9',
          description: 'Serve and enjoy.',
          recipeId: '1',
          createdAt: '1590709660',
          updatedAt: '1590709660'
        },
      ])
    })
}
