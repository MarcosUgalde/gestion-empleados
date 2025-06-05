const {
  createEmployee,
  selectAllEmployees,
  selectEmployee,
} = require("./queries");

const insertEmployee =
  (db) => async (full_name, department, shift, contract_type) => {
    try {
      await db.query(
        createEmployee(full_name, department, shift, contract_type)
      );
      return {
        ok: true,
      };
    } catch (error) {
      console.info("Insert employee error: ", error);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const getAllEmployees = (db) => async () => {
  try {
    const employees = await db.query(selectAllEmployees());
    return {
      ok: true,
      content: employees,
    };
  } catch (error) {
    console.info("Select all employees error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const getEmployee = (db) => async (id) => {
  try {
    const employee = await db.query(selectEmployee(id));
    return {
      ok: true,
      content: employee,
    };
  } catch (error) {
    console.info("Select one employee error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  insertEmployee,
  getAllEmployees,
  getEmployee,
};
