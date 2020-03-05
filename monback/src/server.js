const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const scr = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

scr.use(cors());

// parse requests of content-type - application/json
scr.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
scr.use(bodyParser.urlencoded({ extended: true }));

// simple route
scr.get("/", (req, res) => {
  res.json({ message: "Bienvenue à l'application de Mourad." });
});

require("./routes/entreprise.routes")(scr);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
scr.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
