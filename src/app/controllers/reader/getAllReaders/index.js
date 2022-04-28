const fetchAllReaders = require("~root/actions/reader/fetchAllReaders");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllReaders = async (req, res) => {
  try {
    const { readers } = await fetchAllReaders();
    res.status(201).send({
      readers
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllReaders;
