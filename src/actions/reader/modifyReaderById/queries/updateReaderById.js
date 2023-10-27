const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateReaderById = ({
  readerId,
  email = null,
  password = null,
  genre = null,
  name = null
}) => {
  const updates = [];
  if (email !== null) {
    updates.push(sql`email = ${email}`);
  }
  if (password !== null) {
    updates.push(sql`password = ${password}`);
  }

  if (genre !== null) {
    updates.push(sql`genre = ${genre}`);
  }

  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
    UPDATE 
      Readers
    SET
      ${updates.reduce(sqlReduce)}
    WHERE
      reader_id = ${readerId};
  `;
  }
  return Promise.resolve();
};

module.exports = updateReaderById;
