const { getAllEmployees } = require("../../models/employees");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const response = await getAllEmployees(await db)();

  if (!response.ok) return next(errors[response.error_code || 500]);

  res.status(200).json({
    success: true,
    content: response.content.rows,
  });
};
