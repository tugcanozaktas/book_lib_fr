const deleteBook = require("./queries/deleteBook");

const removeBook = async ({ bookId }) => {
  const deletedBook = await deleteBook({
    bookId
  });
  return { deletedBook };
};

module.exports = removeBook;
