module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("entreprises", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      raisonsocial: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },
      formejuridique: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      adresse: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      ville: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      codepostale: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      telephone: {
        type: Sequelize.STRING(50)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      siteweb: {
        type: Sequelize.STRING(50)
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("entreprises");
  }
};
