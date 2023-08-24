const express = require("express");
const router = express.Router();

const homeSiteController = require("../controllers/homeSiteController");
const verifyAccessToken = require("../middleware/verifyAccessToken.middleware");

router.get("/addbook", homeSiteController.insertBook);
router.get("/", verifyAccessToken, homeSiteController.index);

module.exports = router;
