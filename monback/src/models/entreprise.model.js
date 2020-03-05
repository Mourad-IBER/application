const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Entreprise = sequelize.define("entreprises", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    raisonsocial: {
      allowNull: false,
      type: Sequelize.STRING
    },
    formejuridique: {
      allowNull: false,
      type: Sequelize.STRING
    },
    adresse: {
      allowNull: false,
      type: Sequelize.STRING
    },
    ville: {
      allowNull: false,
      type: Sequelize.STRING
    },
    codepostale: {
      allowNull: false,
      type: Sequelize.STRING
    },
    telephone: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    siteweb: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
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

  return Entreprise;
};
