const selectReaderById = require("./queries/selectReaderById");

const fetchReaderById = async ({ readerId }) => {
  const reader = await selectReaderById({
    readerId
  });

  return { reader };
};

module.exports = fetchReaderById;
