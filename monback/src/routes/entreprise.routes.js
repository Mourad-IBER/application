module.exports = scr => {
  const entreprises = require("../controllers/entreprise.controller.js");

  var router = require("express").Router();

  // Create a new entreprise
  router.post("/", entreprises.create);

  // Retrieve all entreprises
  router.get("/", entreprises.findAll);

  // Retrieve all published entreprises
  router.get("/published", entreprises.findAllPublished);

  // Retrieve a single entreprise with id
  router.get("/:id", entreprises.findOne);

  // Update a entreprise with id
  router.put("/:id", entreprises.update);

  // Delete a entreprise with id
  router.delete("/:id", entreprises.delete);

  // Create a new entreprise
  router.delete("/", entreprises.deleteAll);

  scr.use("/api/entreprises", router);
};
