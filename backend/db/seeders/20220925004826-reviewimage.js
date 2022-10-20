'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReviewImages', [
      {
        reviewId: 1,
        url: "image1.url"
      },
      {
        reviewId: 2,
        url: "image2.url"
      },
      {
        reviewId: 3,
        url: "image3.url"
      },
      {
        reviewId: 4,
        url: "image3.url"
      },
      {
        reviewId: 5,
        url: "image3.url"
      },
      {
        reviewId: 6,
        url: "image3.url"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReviewImages')
  }
};
