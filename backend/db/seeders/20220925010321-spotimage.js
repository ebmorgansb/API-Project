'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SpotImages', [
      {
       spotId: 1,
       url: "image1.url",
       preview: true
      },
      {
        spotId: 1,
        url: "image2.url",
        preview: true
       },
       {
        spotId: 1,
        url: "image3.url",
        preview: true
       }
       ]
       )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages');
  }
};
