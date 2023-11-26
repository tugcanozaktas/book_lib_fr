const updateBookById = require("./queries/updateBookById");

const modifyBookById = async ({ bookId, ISBN, title, author, genre }) => {
  const book = await updateBookById({ bookId, ISBN, title, author, genre });

  return { book };
};

module.exports = modifyBookById;
