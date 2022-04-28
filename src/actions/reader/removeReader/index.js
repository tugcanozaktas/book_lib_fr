const deleteReaderQuery = require("./queries/deleteReaderQuery");

const removeReader = async ({ readerId }) => {
  const deletedReader = await deleteReaderQuery({
    readerId
  });
  return { deletedReader };
};

module.exports = removeReader;
