'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews',
    [
      {
       spotId: 1,
       userId: 1,
       review: 'Relax and Unwind in this 3rd Floor Penthouse End-Unit Ocean Front condo with panoramic views of the Pacific ocean overlooking the Mission Beach Boardwalk!  Located equidistant between Belmont Park and Crystal Pier in the HEART of Mission Beach walk to everything including restaurants, bars, nightlife, coffee shops and so much more!',
       stars: 1,
      },
      {
        spotId: 1,
        userId: 1,
        review: 'Enjoy your Southern California getaway in quaint La Jolla in a historic renovated home from the 1920s with gorgeous ocean views!This property is special, located just above the historic Cave Store and the world famous Sunny Jims Cave, you wont find anything quite like it! Close to La Jolla Village you can walk to shops, restaurants and galleries or you can enjoy all the amenities of a private, comfortable home.',
        stars: 4,
       },
       {
        spotId: 1,
        userId: 1,
        review: 'An exquisite, 3,000 sq ft, beachfront, spacious home on Broad Beach, in Malibu.  Newly decorated and designed, the home includes 3 large bedrooms each with a king-size bed and adjoining bathroom, TVs, and wi-fi. ',
        stars: 3,
       },
       {
        spotId: 2,
        userId: 2,
        review: 'Relax and Unwind in this 3rd Floor Penthouse End-Unit Ocean Front condo with panoramic views of the Pacific ocean overlooking the Mission Beach Boardwalk!  Located equidistant between Belmont Park and Crystal Pier in the HEART of Mission Beach walk to everything including restaurants, bars, nightlife, coffee shops and so much more!',
        stars: 1,
       },
       {
         spotId: 2,
         userId: 2,
         review: 'Enjoy your Southern California getaway in quaint La Jolla in a historic renovated home from the 1920s with gorgeous ocean views!This property is special, located just above the historic Cave Store and the world famous Sunny Jims Cave, you wont find anything quite like it! Close to La Jolla Village you can walk to shops, restaurants and galleries or you can enjoy all the amenities of a private, comfortable home.',
         stars: 4,
        },
        {
         spotId: 2,
         userId: 2,
         review: 'An exquisite, 3,000 sq ft, beachfront, spacious home on Broad Beach, in Malibu.  Newly decorated and designed, the home includes 3 large bedrooms each with a king-size bed and adjoining bathroom, TVs, and wi-fi. ',
         stars: 3,
        },
        {
          spotId: 3,
          userId: 3,
          review: 'Relax and Unwind in this 3rd Floor Penthouse End-Unit Ocean Front condo with panoramic views of the Pacific ocean overlooking the Mission Beach Boardwalk!  Located equidistant between Belmont Park and Crystal Pier in the HEART of Mission Beach walk to everything including restaurants, bars, nightlife, coffee shops and so much more!',
          stars: 1,
         },
         {
           spotId: 3,
           userId: 3,
           review: 'Enjoy your Southern California getaway in quaint La Jolla in a historic renovated home from the 1920s with gorgeous ocean views!This property is special, located just above the historic Cave Store and the world famous Sunny Jims Cave, you wont find anything quite like it! Close to La Jolla Village you can walk to shops, restaurants and galleries or you can enjoy all the amenities of a private, comfortable home.',
           stars: 4,
          },
          {
           spotId: 3,
           userId: 3,
           review: 'An exquisite, 3,000 sq ft, beachfront, spacious home on Broad Beach, in Malibu.  Newly decorated and designed, the home includes 3 large bedrooms each with a king-size bed and adjoining bathroom, TVs, and wi-fi. ',
           stars: 3,
          },
          {
            spotId: 4,
            userId: 4,
            review: 'Relax and Unwind in this 3rd Floor Penthouse End-Unit Ocean Front condo with panoramic views of the Pacific ocean overlooking the Mission Beach Boardwalk!  Located equidistant between Belmont Park and Crystal Pier in the HEART of Mission Beach walk to everything including restaurants, bars, nightlife, coffee shops and so much more!',
            stars: 1,
           },
           {
             spotId: 4,
             userId: 4,
             review: 'Enjoy your Southern California getaway in quaint La Jolla in a historic renovated home from the 1920s with gorgeous ocean views!This property is special, located just above the historic Cave Store and the world famous Sunny Jims Cave, you wont find anything quite like it! Close to La Jolla Village you can walk to shops, restaurants and galleries or you can enjoy all the amenities of a private, comfortable home.',
             stars: 4,
            },
            {
             spotId: 4,
             userId: 4,
             review: 'An exquisite, 3,000 sq ft, beachfront, spacious home on Broad Beach, in Malibu.  Newly decorated and designed, the home includes 3 large bedrooms each with a king-size bed and adjoining bathroom, TVs, and wi-fi. ',
             stars: 3,
            },
            {
              spotId: 5,
              userId: 5,
              review: 'Relax and Unwind in this 3rd Floor Penthouse End-Unit Ocean Front condo with panoramic views of the Pacific ocean overlooking the Mission Beach Boardwalk!  Located equidistant between Belmont Park and Crystal Pier in the HEART of Mission Beach walk to everything including restaurants, bars, nightlife, coffee shops and so much more!',
              stars: 1,
             },
             {
               spotId: 5,
               userId: 5,
               review: 'Enjoy your Southern California getaway in quaint La Jolla in a historic renovated home from the 1920s with gorgeous ocean views!This property is special, located just above the historic Cave Store and the world famous Sunny Jims Cave, you wont find anything quite like it! Close to La Jolla Village you can walk to shops, restaurants and galleries or you can enjoy all the amenities of a private, comfortable home.',
               stars: 4,
              },
              {
               spotId: 5,
               userId: 5,
               review: 'An exquisite, 3,000 sq ft, beachfront, spacious home on Broad Beach, in Malibu.  Newly decorated and designed, the home includes 3 large bedrooms each with a king-size bed and adjoining bathroom, TVs, and wi-fi. ',
               stars: 3,
              },
              {
                spotId: 6,
                userId: 6,
                review: 'Relax and Unwind in this 3rd Floor Penthouse End-Unit Ocean Front condo with panoramic views of the Pacific ocean overlooking the Mission Beach Boardwalk!  Located equidistant between Belmont Park and Crystal Pier in the HEART of Mission Beach walk to everything including restaurants, bars, nightlife, coffee shops and so much more!',
                stars: 1,
               },
               {
                 spotId: 6,
                 userId: 6,
                 review: 'Enjoy your Southern California getaway in quaint La Jolla in a historic renovated home from the 1920s with gorgeous ocean views!This property is special, located just above the historic Cave Store and the world famous Sunny Jims Cave, you wont find anything quite like it! Close to La Jolla Village you can walk to shops, restaurants and galleries or you can enjoy all the amenities of a private, comfortable home.',
                 stars: 4,
                },
                {
                 spotId: 6,
                 userId: 6,
                 review: 'An exquisite, 3,000 sq ft, beachfront, spacious home on Broad Beach, in Malibu.  Newly decorated and designed, the home includes 3 large bedrooms each with a king-size bed and adjoining bathroom, TVs, and wi-fi. ',
                 stars: 3,
                },
      ]
       )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews')
  }
};
