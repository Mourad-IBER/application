const catalogueactivites = require("../seeds/20200302155925-catalogue-activite");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("activites", catalogueactivites);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("activites", null, {});
  }
};
