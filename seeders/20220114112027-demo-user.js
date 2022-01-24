'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{se quehdlbfiz
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Users',[{
      name:'admin',
      email:'admin@mail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      password:'admin',
      admin:'1',
      moderator:'0'
   }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkInsert('Users',null,{});
  }
};
