const selectBookById = require("./queries/selectBookById");

const fetchBookById = async ({ bookId }) => {
  const book = await selectBookById({ bookId });

  return { book };
};

module.exports = fetchBookById;
