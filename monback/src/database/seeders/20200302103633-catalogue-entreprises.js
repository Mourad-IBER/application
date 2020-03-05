const catalogueentreprises = require("../seeds/20200302103933-catalogue-entreprises");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("entreprises", catalogueentreprises);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("entreprises", null, {});
  }
};
