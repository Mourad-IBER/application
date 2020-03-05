const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id_secteur: uuid(),
    libelle_secteur: "Papier, carton et édition",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur: "Batiment, travaux publics et hydraulique",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur: "Plastique, chimie, caoutchouc et verre",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur: "Textile et habillement",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur: "Cuirs, chaussures et maroquinerie",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur: "Prestations de services du secteur de l'industrie",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur: "Etudes,engineering et services financiers",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur: "Produits agro alimentaires",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur:
      "Industries extractives, énergétiques et activités connexes",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur:
      "Transformation des minerais non métalliques, du bois et du liège",
    created_at: now,
    updated_at: now
  },

  {
    id_secteur: uuid(),
    libelle_secteur:
      "Sidérurgie, métallurgie, mécanique, électricité et électronique",
    created_at: now,
    updated_at: now
  }
];
