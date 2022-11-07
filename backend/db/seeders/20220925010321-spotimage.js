'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SpotImages', [
      {
       spotId: 1,
       url: "https://a0.muscache.com/im/pictures/a57ab9ea-80d5-4ed0-aa15-ce536039778d.jpg",
       preview: true
      },
      {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-677112/original/a9014d8d-7a98-4dd2-91ab-7b69e140606d.jpeg",
        preview: true
       },
       {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/8961370/4466c2e0_original.jpg",
        preview: true
       },
       {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/32607798-4dfb-4fd9-8a1a-f71441acabb0.jpg",
        preview: true
       },
       {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/108310227/66a81c82_original.jpg?im_w=720",
        preview: true
       },

      {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-54223480/original/9daf1d87-1590-46a2-a254-a25bd03be87f.jpeg",
        preview: true
       },
       {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-54223480/original/4c7528c1-f547-4719-ac48-4a2bafb0e5e4.jpeg",
        preview: true
       },
       {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-54223480/original/2fad9dec-02e6-4ccb-8e37-66faca3deaa0.jpeg",
        preview: true
       },
       {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-54223480/original/05ee6a56-d56c-48d7-bdc2-d8860dc5792c.jpeg",
        preview: true
       },
       {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-54223480/original/539915ae-772a-4a84-8aab-6a5e278caaee.jpeg",
        preview: true
       },

       {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47844492/original/d2eda9c9-f672-4799-a2ff-853f8f345d5d.jpeg",
        preview: true
       },
       {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47844492/original/fd5571cc-69b0-4319-b867-710870af3e7c.jpeg",
        preview: true
       },
       {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47844492/original/29d4e5a1-7475-4c16-ac52-1b0f14ba4a43.jpeg",
        preview: true
       },
       {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47844492/original/a9b87aa4-e65b-4065-94b9-56c9f0d44a5a.jpeg",
        preview: true
       },
       {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-47844492/original/25781514-48ce-4bcf-b89c-e2237d50c49a.jpeg",
        preview: true
       },

       {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-15070302/original/10e486eb-d8dd-49ee-8444-5e28e3843bdd.jpeg",
        preview: true
       },
       {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-15070302/original/a35e90ed-99b3-4aed-a23e-a01c4029df5d.jpeg",
        preview: true
       },
       {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/0fce96e7-4244-4044-9e5c-58287e0afd1e.jpg",
        preview: true
       },
       {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/7e2c7a48-24d9-4a38-9b71-54ec97d54fe0.jpg",
        preview: true
       },
       {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/7c30cf46-9173-46ba-a7d6-6c1d9cc73ddb.jpg",
        preview: true
       },



       {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/6c9a9a99-9c38-417e-a7f5-a45ede9b3407.jpg",
        preview: true
       },
       {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/7000eee2-da37-4c44-baea-dcb2ee037c6d.jpeg",
        preview: true
       },
       {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/262118ed-e0eb-43eb-a47b-75bfe68680c6.jpeg",
        preview: true
       },
       {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/b2f12cd4-7752-4993-82e8-7ae782a48148.jpeg",
        preview: true
       },
       {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-21515483/original/88f480c3-0ff1-4c75-8495-337c00da316b.jpeg",
        preview: true
       },






       {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/fc2644ca-be6e-40de-94a8-acfe7eb816c5.jpg",
        preview: true
       },
       {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/cfbaf81b-28f4-4bd9-9eed-9fcb04c45eba.jpg",
        preview: true
       },
       {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/92e205c0-f16c-43c9-b65a-68fdc45053a6.jpg",
        preview: true
       },
       {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/8881fd27-6f30-4781-b91c-9c0c5e59a93f.jpg",
        preview: true
       },
       {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/febf3235-5166-4887-aac3-24b01ac5eec6.jpg",
        preview: true
       }
       ]
       )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages');
  }
};
