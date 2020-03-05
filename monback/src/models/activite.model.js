const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Activite = sequelize.define("activites", {
    id_act: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    libelle_activite: {
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

  return Activite;
};
