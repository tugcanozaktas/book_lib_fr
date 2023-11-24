const express = require("express");
const { body, param, validationResult } = require("express-validator");

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
router.get("/readers/:readerId", getReaderById);

router.post(
  "/readers",
  [
    body("name", "must be filled")
      .notEmpty()
      .isString(),
    body("genre", "must be a string")
      .optional()
      .isString(),
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("must be a valid email address"),
    body("password")
      .notEmpty()
      .isString()
      .isLength({ min: 8 })
      .withMessage("must be at least 8 characters")
  ],
  // eslint-disable-next-line consistent-return
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Extract field-specific error messages
      const errorMessages = {};
      errors.array().forEach(error => {
        const fieldName = error.path;
        errorMessages[fieldName] = error.msg;
      });

      // Send a custom error response with field-specific messages
      return res.status(400).json({ errors: errorMessages });
    }

    // If there are no validation errors, continue with your logic
    try {
      const result = await postReader(req, res); // Corrected function name
      res.status(200).json(result);
    } catch (err) {
      // Handle other errors
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  postReader
);
router.patch(
  "/readers/:readerId",
  // Add validation for update reader route
  [
    param("readerId")
      .isInt()
      .toInt(),
    body("name")
      .optional()
      .isString(),
    body("genre")
      .optional()
      .isString()
    // Add more validation rules as needed
  ],

  updateReaderById
);

router.delete("/readers/:readerId", deleteReader);

module.exports = router;
