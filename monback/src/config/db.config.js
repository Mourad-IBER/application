module.exports = {
  HOST: "localhost",
  USER: "mourad",
  PASSWORD: "mourad",
  DB: "annuairedb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
