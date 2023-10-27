const updateReaderById = require("./queries/updateReaderById");

const modifyReaderById = async ({ readerId, email, password, genre, name }) => {
  const reader = await updateReaderById({
    readerId,
    email,
    password,
    genre,
    name
  });

  return { reader };
};

module.exports = modifyReaderById;
