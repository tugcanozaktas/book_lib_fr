const { submitQuery } = require("~root/lib/database");

const deleteReaderQuerys = ({ readerId }) => submitQuery`
    DELETE FROM
        Readers
    WHERE
        reader_id=${readerId}
`;

module.exports = deleteReaderQuerys;
