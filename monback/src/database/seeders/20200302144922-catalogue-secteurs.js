const catalogueSecteurs = require("../seeds/20100302144833-catalogue-secteurs");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("secteurs", catalogueSecteurs);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("secteurs", null, {});
  }
};
