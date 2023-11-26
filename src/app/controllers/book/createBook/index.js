const createBook = require("~root/actions/book/createBook");

const postBook = async (req, res) => {
  const { ISBN, title, author, genre } = req.body;

  try {
    const { bookId } = await createBook({ ISBN, title, author, genre });

    res.status(201).send({
      bookId
    });
  } catch (err) {
    if (err) {
      res.status(500).json({ error: err.sqlMessage });
    }
  }
};

module.exports = postBook;
