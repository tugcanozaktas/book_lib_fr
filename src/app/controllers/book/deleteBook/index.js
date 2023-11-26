const handleAPIError = require("~root/utils/handleAPIError");
const removeBook = require("~root/actions/book/removeBook");

const deleteBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const { deletedBook } = await removeBook({
      bookId
    });

    res.status(204).send({
      deletedBook
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteBook;
