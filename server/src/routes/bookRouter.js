const express = require("express");

const bookRouter = express.Router();
const bookController = require("../controllers/bookController");
const uploadFile = require("../middleware/uploadImage");

bookRouter.post("/add_book", uploadFile.single("img"), bookController.addBook);

module.exports = bookRouter;
