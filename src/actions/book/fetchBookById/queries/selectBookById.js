const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBookById = ({ bookId }) => submitQuery`
    SELECT 
        book_id, ISBN, title, author, genre
    FROM Book
    WHERE book_id = ${bookId}
`;

module.exports = camelKeys(selectBookById);
