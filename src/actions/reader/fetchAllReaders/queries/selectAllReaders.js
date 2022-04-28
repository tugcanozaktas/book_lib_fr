const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllReaders = () => submitQuery`
    SELECT 
        reader_id, name, genre
    FROM Readers
`;

module.exports = camelKeys(selectAllReaders);
