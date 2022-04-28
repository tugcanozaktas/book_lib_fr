const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");

// Readers //

const getAllReaders = require("./controllers/reader/getAllReaders");
const postReader = require("./controllers/reader/createReader");
const getReaderById = require("./controllers/reader/getReaderById");
const updateReaderById = require("./controllers/reader/updateReaderById");
const deleteReader = require("./controllers/reader/deleteReader");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);
// Readers //

router.get("/readers", getAllReaders);
router.post("/readers", postReader);
router.get("/readers/:readerId", getReaderById);
router.patch("/readers/:readerId", updateReaderById);
router.delete("/readers/:readerId", deleteReader);

module.exports = router;
