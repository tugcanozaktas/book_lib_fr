const fetchAllBooks = require("~root/actions/book/fetchAllBooks");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllBooks = async (req, res) => {
  try {
    const { books } = await fetchAllBooks();
    res.status(201).send({
      books
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllBooks;
