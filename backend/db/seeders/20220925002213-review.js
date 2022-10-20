'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews',
    [
      {
       spotId: 1,
       userId: 1,
       review: 'totally lit',
       stars: 1,
      },
      {
        spotId: 2,
        userId: 2,
        review: 'totally lit1',
        stars: 2,
       },
       {
        spotId: 3,
        userId: 3,
        review: 'totally lit2',
        stars: 3,
       },
       {
        spotId: 4,
        userId: 4,
        review: 'totally lit3',
        stars: 5,
       },
       {
        spotId: 5,
        userId: 5,
        review: 'totally lit4',
        stars: 1,
       },
       {
        spotId: 6,
        userId: 6,
        review: 'totally lit4',
        stars: 2,
       }
      ]
       )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews')
  }
};
