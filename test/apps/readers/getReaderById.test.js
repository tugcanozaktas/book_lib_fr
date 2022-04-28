const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET /reader/:readerId", () => {
  const readerId = 1;

  it("should select reader by readerId", async () => {
    const res = await request(router)
      .get(`/readers/${readerId}`)
      .send();
    expect(res.statusCode).to.equal(201);
    expect(res.body).to.eql({
      artist: [
        {
          artistId: 1,
          genre: "Horror",
          name: "John Smith"
        }
      ]
    });
  });
});
