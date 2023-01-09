'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    await queryInterface.bulkInsert(options, [
      {
          ownerId: 1,
          address: "aaa123 Disney Lane",
          city: "San Francisco",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "A truly amazing scenic castle on a hill",
          description: "Balintore Castle has been hosting guests since 1860. Located in a remote Highland Glen, it offers direct access to hill walking, mountain biking, bird-watching and shooting. The kitchen wing accommodation has recently been restored in keeping with the high Victorian character of the building.",
          price: 750
        },
        {
        ownerId: 2,
        address: "aaa123 Disney Lane2",
        city: "Sonomo",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "A gorgeous home and the pool of your dreams",
        description: "Kickback and unwind poolside in our large custom-built home with saltwater pool & jetted spa. Soak up panoramic views of the world-famous San Jacinto mountains while basking in the warm desert sun. Enjoy a round of mini golf at our home putting green, then reconnect with family and friends around the wood-burning fire pit.",
        price: 300
      },
      {
      ownerId: 3,
      address: "111 Ocean Avenue",
      city: "San Fernando",
      state: "Ohio",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "NEW Luxury Celebrity Vineyard Estate in San Fernando ",
      description: "Gorgeous newly-restored former Catholic convent! 7 guest suites, including Carriage House & Garden Suite. The former Chapel now serves as your private living/dining space, complete with original stained glass!",
      price: 123
      },
      {
        ownerId: 4,
        address: "2897 cooltowns road",
        city: "Tahoe",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "A-Frame Cabin w Views, Cedar Hot Tub & Sun Deck",
        description: "A-Frame gem with Lake rights tucked away in the trees of Lake Arrowhead on an acre of land. Newly renovated with modern features and stylish decor. Close to the lake, hiking, restaurants & shopping areas. Ideal location for all your Summer & Winter adventures. Cozy up by the wood burning fireplace in winter or open the doors to the deck in summer--w AC.",
        price: 275
        },
        {
          ownerId: 5,
          address: "509 Incan street",
          city: "Joshua Tree",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "Joshua Tree Remote Airstream Swing bed Stargazing!",
          description: "If you love to travel to experience uniqueness, nature, and adventure, then the magic of Airstream Flying Cloud 2018 - 25RB Travel Trailer in the Desert is purposefully yours, a designed trailer with intentional features to help you maximize your travel experiences.",
          price: 120
          },
          {
            ownerId: 6,
            address: "101 Caviar Bvld",
            city: "Malibu",
            state: "California",
            country: "United States of America",
            lat: 37.7645358,
            lng: -122.4730327,
            name: "Stunning oceanfront beach house with balcony, grill, & fireplaces",
            description: "The home's vintage design has been fully refinished and furnished throughout with luxe, high-end amenities and stylish modern decor for an elevated guest experience. Accordion style doors in the living areas and bedrooms can be opened fully to fill the home with cool, ocean breezes. ",
            price: 400
            },





            {
              ownerId: 1,
              address: "101 Caviar Bvld",
              city: "Peshatin",
              state: "Washington",
              country: "United States of America",
              lat: 37.7645358,
              lng: -122.4730327,
              name: "Hansel Creek Gust Tree House * On 150 Acres",
              description: "Escape high up into the trees above Hansel Creek. Located just 15 minutes to Leavenworth and walking distance to the Alpine Lakes Wilderness trail-head. Sitting on pristine Hansel Creek this is the only tree house in Leavenworth and the surrounding areas. This beautifully built tree house displays timber-frame craftsmanship & custom log details. ",
              price: 200
              },
              {
                ownerId: 2,
                address: "101 Caviar Bvld",
                city: "Joshua Tree",
                state: "California",
                country: "United States of America",
                lat: 37.7645358,
                lng: -122.4730327,
                name: "Joshua Tree Desert Retreat: Hot Tub, Game Room, National Park, Hammocks",
                description: "Morgan Estates welcomes you to our Joshua Tree Desert Retreat which is just minutes from the west entrance to Joshua Tree National Park. This house, with breath taking views of the desert and mountains, is located  approximately 5 minutes from the park, 3 minutes to Joshua Tree Village, 10 minutes to Yucca Valley and 45 minutes to Palm Springs.",
                price: 483
                },
                {
                  ownerId: 3,
                  address: "101 Caviar Bvld",
                  city: "Fairbanks",
                  state: "Alaska",
                  country: "United States of America",
                  lat: 37.7645358,
                  lng: -122.4730327,
                  name: "Aurora Villa: Deluxe Double Bed Room",
                  description: "Northern Lights season is here! Just built, modern tiny home on the banks of the Chena River. Prime location in town. Short walk to Pioneer Park, Carlson Center & Hoo Doo Brewery. 8 min drive to the airport (FAI) & UAF. Ride bikes downtown in the summer along the river bike path. Kayak/paddle board rentals are minutes away. Beautiful kitchen, large walk-in shower, fast Wi-Fi and a comfy queen bed!",
                  price: 400
                  },
                  {
                    ownerId: 4,
                    address: "101 Caviar Bvld",
                    city: "Skyforest",
                    state: "California",
                    country: "United States of America",
                    lat: 37.7645358,
                    lng: -122.4730327,
                    name: "Castle in the Forest",
                    description: "Nestled in a deep canyon nearby serene Lake Arrowhead – you will find Southern California’s secret gem: the Castle In the Forest. Surrounded by towering pine and dogwood trees, this secluded 10,000 square foot chateau provides an unforgettable intimate setting for your stay. ",
                    price: 3400
                    },
                    {
                      ownerId: 5,
                      address: "101 Caviar Bvld",
                      city: "Gaviota",
                      state: "California",
                      country: "United States of America",
                      lat: 37.7645358,
                      lng: -122.4730327,
                      name: "Modern Farmhouse in the Hills",
                      description: "This country home is located in the beautiful hills near Nojoqui Falls park! The amazing views of the Valley are so wonderful to enjoy with a glass wine in hand. We are on 20 acres with a vinyard, and located right across the street from Folded Hills Farm. This is a new house with all the  amenities to have a fun and relaxing vacation away from the hustle and bustle of city life. You will see lots of wild life and when you want to take a walk head down to the falls.",
                      price: 650
                      },
                      {
                        ownerId: 6,
                        address: "101 Caviar Bvld",
                        city: "Glendale",
                        state: "California",
                        country: "United States of America",
                        lat: 37.7645358,
                        lng: -122.4730327,
                        name: "Dope Artist Loft near Hollywood",
                        description: "This almost 1000 square ft work/live loft is one of my many homes. I've slept here no more than a dozen times and it remains decorated and full of most the things an artist-type would need to feel completely at home",
                        price: 245
                        },
    ])
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    await queryInterface.bulkDelete(options)
  }
};
