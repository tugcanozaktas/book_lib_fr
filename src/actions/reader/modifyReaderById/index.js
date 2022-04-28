const updateReaderById = require("./queries/updateReaderById");

const modifyReaderById = async ({ readerId, genre, name }) => {
  const reader = await updateReaderById({
    readerId,
    genre,
    name
  });

  return { reader };
};

module.exports = modifyReaderById;
