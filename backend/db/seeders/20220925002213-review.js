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
        spotId: 1,
        userId: 1,
        review: 'totally lit2',
        stars: 3,
       }
      ]
       )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews')
  }
};
