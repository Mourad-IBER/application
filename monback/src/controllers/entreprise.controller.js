const db = require("../models");
const Entreprise = db.entreprises;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.raisonsocial) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const entreprise = {
    raisonsocial: req.body.raisonsocial,
    adresse: req.body.adresse,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Entreprise.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création du l'Entreprise."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const raisonsocial = req.query.raisonsocial;
  var condition = raisonsocial
    ? { raisonsocial: { [Op.iLike]: `%${raisonsocial}%` } }
    : null;

  Entreprise.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la récupération des Entreprises."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Entreprise.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la récupération de l'entreprise avec id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Entreprise.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "l'Entreprise a été mis à jour avec succès."
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour l'Entreprise avec id=${id}. Peut-être que l'Entreprise n'a pas été trouvé ou que la requete est vide!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la mise à jour de l'Entreprise avec id=" + id
      });
    });
};



// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

  Entreprise.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });

};


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Entreprise.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Tutorials were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });

};
