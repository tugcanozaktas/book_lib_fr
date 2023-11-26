const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET books", () => {
  before(async () => {});

  it("should select all books list", async () => {
    const response = await request(router)
      .get("/book")
      .send();

    expect(response.statusCode).to.equal(201);
    expect(response.body).to.eql({
      books: [
        {
          bookId: 1,
          isbn: 1526617161,
          title: "Court of Mist and Fury",
          author: "Sarah J. Maas",
          genre: "Philosophical"
        },
        {
          bookId: 2,
          isbn: 2147483647,
          title: "Een Hoed Van Lucht",
          author: "Terry Pratchett",
          genre: "Fantasy"
        },
        {
          bookId: 3,
          isbn: 375751548,
          title: "Swann's way",
          author: "Marcel Proust",
          genre: "Novel"
        },
        {
          bookId: 4,
          isbn: 553381687,
          title: "A Game of Thrones",
          author: "George R. R. Martin",
          genre: "Exploratory"
        }
      ]
    });
  });
});
