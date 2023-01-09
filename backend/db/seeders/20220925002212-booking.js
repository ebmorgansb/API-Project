'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: "2025-11-24",
        endDate: "2025-11-25",
      },
      {
        spotId: 2,
        userId: 2,
        startDate: "2025-11-01",
        endDate: "2025-11-02",
      },
      {
        spotId: 3,
        userId: 3,
        startDate: "2025-11-10",
        endDate: "2025-11-11",
      },
      {
        spotId: 4,
        userId: 4,
        startDate: "2026-11-10",
        endDate: "2026-11-11",
      },
      {
        spotId: 5,
        userId: 5,
        startDate: "2026-11-10",
        endDate: "2026-11-11",
      },
      {
        spotId: 6,
        userId: 6,
        startDate: "2027-11-10",
        endDate: "2027-11-11",
      },
      ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    await queryInterface.bulkDelete(options)
  }
};
