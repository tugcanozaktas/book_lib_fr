const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateBookById = ({
  bookId,
  ISBN = null,
  title = null,
  author = null,
  genre = null
}) => {
  const updates = [];
  if (ISBN !== null) {
    updates.push(sql`ISBN = ${ISBN}`);
  }

  if (title !== null) {
    updates.push(sql`title = ${title}`);
  }

  if (author !== null) {
    updates.push(sql`author = ${author}`);
  }

  if (genre !== null) {
    updates.push(sql`genre = ${genre}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
    UPDATE 
      Book
    SET
      ${updates.reduce(sqlReduce)}
    WHERE
      book_id = ${bookId};
  `;
  }
  return Promise.resolve();
};

module.exports = updateBookById;
