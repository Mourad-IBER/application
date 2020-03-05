module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("produits", {
      id_prod: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      libelle_produit: {
        allowNull: false,
        type: Sequelize.STRING(60)
      },

      id_act: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "activites",
          key: "id_act"
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produits");
  }
};
