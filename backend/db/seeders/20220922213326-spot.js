'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
          ownerId: 1,
          address: "aaa123 Disney Lane",
          city: "San Francisco",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "App Academy",
          description: "Place where web developers are created",
          price: 123
        },
        {
        ownerId: 2,
        address: "aaa123 Disney Lane2",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "App Academy",
        description: "Place where web developers are created",
        price: 123
      },
      {
      ownerId: 3,
      address: "111 Ocean Avenue",
      city: "San Fernando",
      state: "Ohio",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "Low key facility",
      description: "This 1 bedroom, 1 bath newly remodeled open floorplan kitchen with new appliances",
      price: 123
      },
      {
        ownerId: 4,
        address: "2897 cooltowns road",
        city: "Fresno",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "Gorgeous Estate",
        description: "Absolutely charming oceanfront retreat just past county line with 60 feet of private",
        price: 1253
        },
        {
          ownerId: 5,
          address: "509 Incan street",
          city: "Ventura",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "Perfect Getaway",
          description: "Chic beach house on Broad Beach.",
          price: 50
          },
          {
            ownerId: 6,
            address: "101 Caviar Bvld",
            city: "Eureka",
            state: "New York",
            country: "United States of America",
            lat: 37.7645358,
            lng: -122.4730327,
            name: "2 Bedrooms to never forget",
            description: "Designed by Skrillex, this Malibu Beach Oasis has easy access to the ocean",
            price: 1253
            }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Spots')
  }
};
