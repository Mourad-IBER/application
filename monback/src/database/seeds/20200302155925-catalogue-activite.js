const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id_act: uuid(),
    id_secteur: "",
    libelle_activite: "Produits de l'édition"
  }
];
