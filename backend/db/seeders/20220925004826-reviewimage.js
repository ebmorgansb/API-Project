'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, 'ReviewImages', [
      {
        reviewId: 1,
        url: "https://a0.muscache.com/im/pictures/7e0267d0-0f75-4246-a4b2-50360b361f80.jpg"
      },
      {
        reviewId: 2,
        url: "https://a0.muscache.com/im/pictures/f544bce0-8f46-4fd2-a43e-99f267c5384b.jpg"
      },
      {
        reviewId: 3,
        url: "https://a0.muscache.com/im/pictures/4d0bab4e-83f0-48f5-a8fd-1f610ca456ce.jpg"
      },
      {
        reviewId: 4,
        url: "https://a0.muscache.com/im/pictures/66526778/a45cd4a4_original.jpg"
      },
      {
        reviewId: 5,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-645949816519904365/original/077e14bb-3c59-4436-ac54-24dcb2d5f00d.jpeg"
      },
      {
        reviewId: 6,
        url: "https://a0.muscache.com/im/pictures/81c6a0f5-b0e9-4248-8994-6c363864c222.jpg"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, 'ReviewImages')
  }
};
