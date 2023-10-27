const { submitQuery, getInsertId } = require("~root/lib/database");

const insertReader = ({ name, genre, email, password }) => submitQuery`
    INSERT INTO Readers(name, genre, email, password)
    VALUE(${name}, ${genre}, ${email}, ${password});
`;

module.exports = getInsertId(insertReader);
