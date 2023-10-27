const { submitQuery, camelKeys } = require("~root/lib/database");

const selectReaderById = ({ readerId }) => submitQuery`
    SELECT 
       reader_id, email, name, genre
    FROM Readers
    WHERE reader_id= ${readerId}
    `;

module.exports = camelKeys(selectReaderById);
