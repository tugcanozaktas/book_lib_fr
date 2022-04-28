const selectAllReaders = require("./queries/selectAllReaders");

const fetchAllReaders = async () => {
  const reader = await selectAllReaders();

  return { reader };
};

module.exports = fetchAllReaders;
