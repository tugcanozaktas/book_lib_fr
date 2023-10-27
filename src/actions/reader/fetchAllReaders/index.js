const selectAllReaders = require("./queries/selectAllReaders");

const fetchAllReaders = async () => {
  const readers = await selectAllReaders();

  return { readers };
};

module.exports = fetchAllReaders;
