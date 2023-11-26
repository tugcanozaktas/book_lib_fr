const { submitQuery } = require("~root/lib/database");

const deleteBook = ({ bookId }) => submitQuery`
    DELETE FROM
        Book
    WHERE
        book_id=${bookId}
`;

module.exports = deleteBook;
