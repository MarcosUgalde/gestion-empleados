const router = require("express").Router();

const employeesControllers = require("../controllers/employees");

module.exports = (db) => {
  router.post("/new", employeesControllers.createEmployee(db));

  return router;
};
