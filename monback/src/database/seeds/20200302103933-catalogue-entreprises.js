const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();

module.exports = [
  {
    id: uuid(),
    raisonsocial: "PRO PACK Emballages",
    formejuridique: "Producteur",
    adresse: "Rue O, lot 119, arriére-port",
    ville: "Bejaia",
    codepostale: "06000",
    telephone: "034 21 18 19",
    email: "email@email.com",
    siteweb: "www.monsite.com",
    published: false,
    created_at: now,
    updated_at: now
  }
];
