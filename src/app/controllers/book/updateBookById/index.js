const modifyBookById = require("~root/actions/book/modifyBookById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchBookById = async (req, res) => {
  const { bookId } = req.params;
  const { ISBN, title, author, genre } = req.body;

  try {
    const { book } = await modifyBookById({
      bookId,
      ISBN,
      title,
      author,
      genre
    });

    res.status(201).send({
      book
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchBookById;
