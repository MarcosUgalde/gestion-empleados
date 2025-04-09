const router = require("express").Router();

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const employeesRoutes = require("./employees");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/user", usersRoutes(db));
  router.use("/employees", employeesRoutes(db));

  return router;
};
