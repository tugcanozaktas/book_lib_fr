const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET readers", () => {
  before(async () => {});

  it("should select all readers list", async () => {
    const response = await request(router)
      .get("/readers")
      .send();

    expect(response.statusCode).to.equal(201);
    expect(response.body).to.eql({
      readers: [
        {
          email: "johnsmith@gmail.com",
          genre: "Horror",
          name: "John Smith",
          readerId: 1
        },
        {
          email: "katemar@gmail.com",
          genre: "Novel",
          name: "Kate Mar",
          readerId: 2
        },
        {
          email: "jamesluce@gmail.com",
          genre: "Romantic",
          name: "James Luce",
          readerId: 3
        }
      ]
    });
  });
});

// {
//     "readers": [
//       {
//       "genre": "Horror"
//         "name": "John Smith"
//         "readerId": 1
//       }
//       {
//         "genre": "Novel"
//         "name": "Kate Mar"
//         "readerId": 2
//       }
//       {
//         "genre": "Romantic"
//         "name": "James Luce"
//         "readerId": 3
//       }
//     ]
//   }
