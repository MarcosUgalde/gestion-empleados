const router = require("express").Router();
const { authorizer } = require("../middlewares");

const employeesControllers = require("../controllers/employees");

module.exports = (db) => {
  router.get("/all", authorizer(), employeesControllers.getAllEmployees(db));
  router.get("/:id", authorizer(), employeesControllers.getEmployee(db));
  router.post("/new", authorizer(), employeesControllers.createEmployee(db));
  router.put(
    "/update/:id",
    authorizer(),
    employeesControllers.updateEmployee(db)
  );

  return router;
};
