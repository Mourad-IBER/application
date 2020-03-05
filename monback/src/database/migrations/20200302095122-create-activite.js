module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("activites", {
      id_act: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      libelle_activite: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },

      id_secteur: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "secteurs",
          key: "id_secteur"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("activites");
  }
};
