const insertBook = require("./queries/insertBook");

const createBook = async ({ ISBN, title, author, genre }) => {
  const bookId = await insertBook({ ISBN, title, author, genre });
  return { bookId };
};

module.exports = createBook;
