const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /book/:bookId", () => {
  const bookId = 1;

  it("should select book by bookId", async () => {
    const res = await request(router)
      .get(`/book/${bookId}`)
      .send();
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.eql({
      book: [
        {
          bookId: 1,
          isbn: 1526617161,
          title: "Court of Mist and Fury",
          author: "Sarah J. Maas",
          genre: "Philosophical"
        }
      ]
    });
  });
});
