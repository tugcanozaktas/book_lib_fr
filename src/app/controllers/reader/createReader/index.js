const handleAPIError = require("~root/utils/handleAPIError");
const createReader = require("~root/actions/reader/createReader");

const postReader = async (req, res) => {
  const { name, genre, email, password } = req.body;

  try {
    const { readerId } = await createReader({ name, genre, email, password });

    res.status(201).send({
      readerId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postReader;
