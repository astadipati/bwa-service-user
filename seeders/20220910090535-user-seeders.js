'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('users', [{
        name: 'John',
        profession: "Backend",
        role: "admin",
        email: "john@gmail.com",
        password: await bcrypt.hash('rahasia', 10),
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Doe',
        profession: "Front end developer",
        role: "student",
        email: "doe@gmail.com",
        password: await bcrypt.hash('rahasia', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
