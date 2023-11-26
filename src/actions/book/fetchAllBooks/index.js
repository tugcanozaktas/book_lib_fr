const selectAllBooks = require("./queries/selectAllBooks");

const fetchAllBooks = async () => {
  const books = await selectAllBooks();

  return { books };
};

module.exports = fetchAllBooks;
