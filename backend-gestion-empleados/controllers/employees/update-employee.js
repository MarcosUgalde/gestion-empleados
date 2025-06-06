const { editEmployee } = require("../../models/employees");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  const { department, shift, contract_type } = req.body;

  const employee = await editEmployee(await db)(
    id,
    department,
    shift,
    contract_type
  );

  if (!employee) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: employee.data,
  });
};
