const { submitQuery, getInsertId } = require("~root/lib/database");

const insertBook = ({ ISBN, title, author, genre }) =>
  submitQuery`
        INSERT INTO Book(ISBN, title, author, genre)
    VALUE(${ISBN}, ${title}, ${author}, ${genre});
`;

module.exports = getInsertId(insertBook);
