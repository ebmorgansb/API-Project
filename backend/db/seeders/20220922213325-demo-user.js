'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = '<Users>';
    return queryInterface.bulkInsert(options, 'Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: "John",
        lastName: "Warren"
      },
      {
        email: 'user12@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        firstName: 'Jeremiah',
        lastName: 'Thaine'
      },
      {
        email: 'user224@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'Sarah',
        lastName: 'Fox'
      },
      {
        email: 'user22352@user.io',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'Evonne',
        lastName: 'Walls'
      },
      {
        email: 'user223522@user.io',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'Susan',
        lastName: 'Collins'
      },
      {
        email: 'user223525@user.io',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password3'),
        firstName: 'Psalm',
        lastName: 'Jantzen'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = '<Users>';
    return queryInterface.bulkDelete(options, 'Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
