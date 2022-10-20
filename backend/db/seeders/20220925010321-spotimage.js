'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SpotImages', [
      {
       spotId: 1,
       url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-18327626/original/dd514184-652d-43ac-9647-945ecdd4f890.jpeg",
       preview: true
      },
      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-51752525/original/74a26c69-847c-4006-8d82-baee115fda1c.jpeg",
        preview: true
       },
       {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-14886949/original/a9d72542-cd1f-418d-b070-a73035f94fe4.jpeg",
        preview: true
       },
       {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/8ec73873-4fbc-412c-8377-7b7fc8c8a4ec.jpg",
        preview: true
       },
       {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-16100224/original/ab75e3ff-d6b9-45ef-a240-fc103d0ba45e.jpeg",
        preview: true
       },
       {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/1e9ae044-9e13-4fe1-b676-1f010b89a7bc.jpg",
        preview: true
       }
       ]
       )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages');
  }
};
