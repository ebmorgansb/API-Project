'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, 'SpotImages', [
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
       },



       {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/f906fe29-49de-4375-a485-a8148c5e0de0.jpg",
        preview: true
       },
       {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/fedfd719-db8e-4c1c-aef6-f89ae0703cbb.jpg",
        preview: true
       },
       {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/c7d54e7b-4ff2-4c1f-8cd4-2459f71bc819.jpg",
        preview: true
       },
       {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/08353c1f-b28d-4d3d-8a4e-f92495f1df26.jpg",
        preview: true
       },
       {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/9a292ef6-01c0-4085-a5d3-6e29dfb7a675.jpg",
        preview: true
       },


       {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/5ce4fbd4-d7e4-49d9-90f2-57cec4025c78.jpg",
        preview: true
       },
       {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/df42e679-d26e-4561-9e2f-0bcd59daf7c2.jpg",
        preview: true
       },
       {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/2bbf0139-1c38-4501-8cfa-d05999ad6871.jpg",
        preview: true
       },
       {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/5aac9457-55cc-4f9a-a084-b05dca92b44f.jpg",
        preview: true
       },
       {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/0d6047be-29e8-41e6-85e7-c81be50c32c9.jpg",
        preview: true
       },



       {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/41558477-1dc1-4c63-b23d-b0f4ade79d62.jpg",
        preview: true
       },
       {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/aea7f75b-7315-483d-ba66-7db5bf0676db.jpg",
        preview: true
       },
       {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/29b22b74-e847-46c2-b083-fa4bced4fcda.jpg",
        preview: true
       },
       {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/0d1632ef-2279-405f-9976-61e19e57cf3b.jpg",
        preview: true
       },
       {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/c1247db7-8496-4d11-9bb5-39898508d4f6.jpg",
        preview: true
       },

       {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/5a8b30c9-45a5-4184-a970-d3f942ec3733.jpg",
        preview: true
       },
       {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/03f23a46-efe0-4537-92e3-96b8df13e98f.jpg",
        preview: true
       },
       {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/f7387173-ace9-417b-a08f-d05129f688b7.jpg",
        preview: true
       },
       {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/5d64f8ca-2fba-4335-b499-46845aea6b9d.jpg",
        preview: true
       },
       {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/fed50feb-d650-42b5-92e0-42f55541591e.jpg",
        preview: true
       },

       {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/a7b17293-26ed-468a-8098-bef83dad2449.jpg",
        preview: true
       },
       {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/0f4547f6-6a7f-48a4-aef8-7d66cbdcec4d.jpg",
        preview: true
       },
       {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/815c687f-942f-428a-af82-818943ba669b.jpg",
        preview: true
       },
       {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/99bbc090-29a8-4b05-9988-e5c61dd71772.jpg",
        preview: true
       },
       {
        spotId: 11,
        url: "https://a0.muscache.com/im/pictures/b1cb031b-63c1-471f-9af5-f6ab726bc6d0.jpg",
        preview: true
       },

       {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-16870431/original/8d3b12bf-1e18-4579-b926-6d57140f25bf.jpeg",
        preview: true
       },
       {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-16870431/original/95ebd3a6-f3a2-4897-bcd9-d0728f7fb4c5.jpeg",
        preview: true
       },
       {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-16870431/original/9f4ce669-8e54-4c96-937d-40c3293f1a1d.jpeg",
        preview: true
       },
       {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-16870431/original/0e4d120d-3723-4520-9f8b-a09f294a1e7a.jpeg",
        preview: true
       },
       {
        spotId: 12,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-16870431/original/5a7ebaf2-1e29-4c52-b3f7-54ab4d91316f.jpeg",
        preview: true
       }

       ]
       )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, 'SpotImages');
  }
};
