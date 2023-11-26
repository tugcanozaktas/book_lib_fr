const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllBooks = () => submitQuery`
    SELECT 
        book_id, ISBN, title, author, genre
    FROM Book
`;

module.exports = camelKeys(selectAllBooks);
