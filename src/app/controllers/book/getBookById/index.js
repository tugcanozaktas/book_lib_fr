const fetchBookById = require("~root/actions/book/fetchBookById");
const handleAPIError = require("~root/utils/handleAPIError");

const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { book } = await fetchBookById({ bookId });
    res.status(201).send({
      book
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBookById;
