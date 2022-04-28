const { submitQuery, getInsertId } = require("~root/lib/database");

const insertReader = ({ name, genre }) => submitQuery`
    INSERT INTO Readers(name, genre)
    VALUE(${name}, ${genre});
`;

module.exports = getInsertId(insertReader);
