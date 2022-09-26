'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [
      {
        spotId: 1,
        userId: 1,
        startDate: "2025-11-24",
        endDate: "2025-11-25",
      },
      {
        spotId: 2,
        userId: 2,
        startDate: "2025-11-24",
        endDate: "2025-11-25",
      },
      {
        spotId: 3,
        userId: 3,
        startDate: "2025-11-24",
        endDate: "2025-11-25",
      }
      ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Bookings')
  }
};
