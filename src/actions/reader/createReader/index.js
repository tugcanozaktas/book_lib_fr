const insertReader = require("./queries/insertReader");

const createReader = async ({ name, genre }) => {
  const readerId = await insertReader({ name, genre });
  return { readerId };
};

module.exports = createReader;
