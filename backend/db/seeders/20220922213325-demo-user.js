'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: "wow1",
        lastName: "cow1"
      },
      {
        email: 'user12@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        firstName: 'wow2egrg',
        lastName: 'cow2humu'
      },
      {
        email: 'user224@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'wow3',
        lastName: 'cow3'
      },
      {
        email: 'user22352@user.io',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'wow3ss',
        lastName: 'cow3sss'
      },
      {
        email: 'user223522@user.io',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'wow3werwr',
        lastName: 'cow3iki'
      },
      {
        email: 'user223525@user.io',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'wow3i,f',
        lastName: 'cow3fgnn'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
