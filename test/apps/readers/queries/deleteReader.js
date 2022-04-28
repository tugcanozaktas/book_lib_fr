const { submitQuery } = require("~root/lib/database");

const deleteReader = ({ readerId }) => submitQuery`
    DELETE FROM
        Readers
    WHERE
        reader_id=${readerId}
`;

module.exports = deleteReader;
