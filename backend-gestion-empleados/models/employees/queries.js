const { sql } = require("slonik");

const createEmployee = (
  full_name,
  department,
  shift,
  contract_type
) => sql.unsafe`
    INSERT INTO employees (
        full_name, department, shift, contract_type
    ) VALUES(
        ${full_name}, ${department}, ${shift}, ${contract_type} 
    )
`;

const selectAllEmployees = () => sql.unsafe`
    SELECT * FROM employees
`;

const selectEmployee = (id) => sql.unsafe`
  SELECT * FROM employees
  WHERE id = ${id}
`;

module.exports = {
  createEmployee,
  selectAllEmployees,
  selectEmployee,
};
