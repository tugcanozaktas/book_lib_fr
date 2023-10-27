const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const createReader = require("./queries/createReader");

safeDescribe("DELETE /readers/:readerId", () => {
  let readerIdToDelete;

  before(async () => {
    readerIdToDelete = await createReader({
      name: "John Smith",
      genre: "Horror",
      email: "johnsmith@gmail.com",
      password: "smithsmith12"
    });
  });

  it("deletes reader record by id", async () => {
    const res = await request(router).delete(`/readers/${readerIdToDelete}`);
    expect(res.status).to.equal(204);
  });
});
