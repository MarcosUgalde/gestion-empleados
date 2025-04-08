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

module.exports = {
  createEmployee,
};
