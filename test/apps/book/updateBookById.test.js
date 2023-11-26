const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const selectBookById = require("./queries/selectBookById");
const updateBookById = require("./queries/updateBookById");

safeDescribe("#PATCH book by bookId", () => {
  const bookId = 1;

  after(async () => {
    await updateBookById({
      bookId,
      isbn: 1526617161,
      title: "Court of Mist and Fury",
      author: "Sarah J. Maas",
      genre: "Philosophical"
    });
  });
  it("updates book isbn by id", async () => {
    const response = await request(router)
      .patch(`/book/${bookId}`)
      .send({
        ISBN: "789654"
      });
    expect(response.status).to.equal(201);
    const result = await selectBookById({ bookId });
    expect(result).to.eql([
      {
        bookId: 1,
        isbn: 789654,
        title: "Court of Mist and Fury",
        author: "Sarah J. Maas",
        genre: "Philosophical"
      }
    ]);
  });

  it("updates book title by id", async () => {
    const response = await request(router)
      .patch(`/book/${bookId}`)
      .send({
        title: "Game of Boom"
      });
    expect(response.status).to.equal(201);
    const result = await selectBookById({ bookId });
    expect(result).to.eql([
      {
        bookId: 1,
        isbn: 789654,
        title: "Game of Boom",
        author: "Sarah J. Maas",
        genre: "Philosophical"
      }
    ]);
  });

  it("updates book author by id", async () => {
    const response = await request(router)
      .patch(`/book/${bookId}`)
      .send({
        author: "Michael Jackson"
      });
    expect(response.status).to.equal(201);
    const result = await selectBookById({ bookId });
    expect(result).to.eql([
      {
        bookId: 1,
        isbn: 789654,
        title: "Game of Boom",
        author: "Michael Jackson",
        genre: "Philosophical"
      }
    ]);
  });

  it("updates book genre by id", async () => {
    const response = await request(router)
      .patch(`/book/${bookId}`)
      .send({
        genre: "Drama"
      });
    expect(response.status).to.equal(201);
    const result = await selectBookById({ bookId });
    expect(result).to.eql([
      {
        bookId: 1,
        isbn: 789654,
        title: "Game of Boom",
        author: "Michael Jackson",
        genre: "Drama"
      }
    ]);
  });
});
