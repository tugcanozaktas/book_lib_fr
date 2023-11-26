const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const deleteBook = require("./queries/deleteBook");

safeDescribe("#POST readers", () => {
  let bookIdCreated;

  after(async () => {
    await deleteBook({ bookId: bookIdCreated });
  });

  it("creates a new book in the database", async () => {
    const response = await request(router)
      .post("/book")
      .send({
        ISBN: "123456789",
        title: "abcdefgh",
        author: "john smith",
        genre: "ijklmnopr"
      });

    bookIdCreated = response.body.bookId;

    expect(response.status).to.equal(201);
  });
});
