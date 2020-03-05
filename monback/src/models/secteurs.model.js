const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Secteur = sequelize.define("secteurs", {
    id_sect: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    libelle_secteur: {
      allowNull: false,
      type: Sequelize.STRING
    },

    createdAt: {
      field: "created_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
        notNull: true
      }
    },
    updatedAt: {
      field: "updated_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
        notNull: true
      }
    }
  });

  return Secteur;
};
