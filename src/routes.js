// importar apenas o routes não o express inteiro
const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

module.exports = routes;
