const insertReader = require("./queries/insertReader");

const createReader = async ({ name, genre, email, password }) => {
  const readerId = await insertReader({ name, genre, email, password });
  return { readerId };
};

module.exports = createReader;
