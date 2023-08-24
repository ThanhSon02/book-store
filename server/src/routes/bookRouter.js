const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "./upload" });
const router = express.Router();

const bookController = require("../controllers/bookController");

router.post("/upload", upload.single("img"), bookController.postFile);

module.exports = router;
