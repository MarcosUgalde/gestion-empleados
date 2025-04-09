const { createEmployee } = require("./queries");

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

module.exports = {
  insertEmployee,
};
