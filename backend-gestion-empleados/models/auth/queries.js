const { sql } = require("slonik");

const insertUser = (email, username, password, edit_access) => sql.unsafe`
INSERT INTO users (
        email, username, password, edit_access
    ) VALUES (
        ${email}, ${username}, ${password}, ${edit_access}
    )
`;

const selectUser = (email) => sql.unsafe`
    SELECT * FROM users
    WHERE email = ${email}
`;

module.exports = {
  insertUser,
  selectUser,
};
