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
  },

  {
    id: uuid(),
    raisonsocial: "SEMEST  Socièté des Emballages de LEst",
    formejuridique: "SARL",
    adresse: "13 Chatt sud, lots n°49 et 50.ZAE Ain Oulmene",
    ville: "Setif",
    codepostale: "19000",
    telephone: "0472 13 55 62",
    email: "ssemest@yahoo.fr",
    siteweb: "www.monsite.com",
    published: false,
    created_at: now,
    updated_at: now
  },

  {
    id: uuid(),
    raisonsocial: "PRO PACK Emballages2",
    formejuridique: "Producteur",
    adresse: "Rue O, lot 119, arriére-port",
    ville: "Alger",
    codepostale: "16000",
    telephone: "034 21 18 19",
    email: "email@email.com",
    siteweb: "www.monsite.com",
    published: false,
    created_at: now,
    updated_at: now
  },

  {
    id: uuid(),
    raisonsocial: "SEMEST / Socièté des Emballages du centre",
    formejuridique: "SARL",
    adresse: "13 Chatt sud, lots n°49 et 50.ZAE Ain Oulmene",
    ville: "Tizi ouzou",
    codepostale: "15000",
    telephone: "0472 13 55 62 / 0550 33 62 22",
    email: "ssemest@yahoo.fr",
    siteweb: "www.monsite.com",
    published: false,
    created_at: now,
    updated_at: now
  }
];
