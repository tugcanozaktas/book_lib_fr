const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const createBook = require("./queries/createBook");

safeDescribe("DELETE /book/:bookId", () => {
  let bookIdToDelete;

  before(async () => {
    bookIdToDelete = await createBook({
      ISBN: "123456789",
      title: "abcdefgh",
      author: "john smith",
      genre: "ijklmnopr"
    });
  });

  it("deletes book record by id", async () => {
    const res = await request(router).delete(`/book/${bookIdToDelete}`);
    expect(res.status).to.equal(204);
  });
});
