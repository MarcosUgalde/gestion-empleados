const router = require("express").Router();
const { authorizer } = require("../middlewares");

const employeesControllers = require("../controllers/employees");

module.exports = (db) => {
  router.get("/all", authorizer(), employeesControllers.getAllEmployees(db));
  router.post("/new", authorizer(), employeesControllers.createEmployee(db));

  return router;
};
