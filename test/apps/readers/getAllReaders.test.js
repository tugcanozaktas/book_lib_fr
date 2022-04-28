const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET readers", () => {
  it("should select all readers", async () => {
    const response = await request(router)
      .get("/readers")
      .send();

    expect(response.statusCode).to.equal(201);
    expect(response.body).to.eql({
      artists: [
        { readerId: 1, name: "John Smith", genre: "Horror" },
        { readerId: 2, name: "Kate Mar", genre: "Novel" },
        { readerId: 3, name: "James Luce", genre: "Romantic" }
      ]
    });
  });
});
