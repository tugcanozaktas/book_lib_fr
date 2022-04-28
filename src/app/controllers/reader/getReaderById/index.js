const fetchReaderById = require("~root/actions/reader/fetchReaderById");
const handleAPIError = require("~root/utils/handleAPIError");

const getReaderById = async (req, res) => {
  const { readerId } = req.params;
  try {
    const { reader } = await fetchReaderById({
      readerId
    });

    res.status(201).send({
      reader
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getReaderById;
