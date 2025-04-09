const { hash } = require("simple-stateless-auth-library");
const { insertEmployee } = require("../../models/employees");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { full_name, department, shift, contract_type } = req.body;
  const response = await insertEmployee(await db)(
    full_name,
    department,
    shift,
    contract_type
  );

  if (!response.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
  });
};
