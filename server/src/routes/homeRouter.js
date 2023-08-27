const express = require("express");
const homeRouter = express.Router();

const homeSiteController = require("../controllers/homeSiteController");
const verifyAccessToken = require("../middleware/verifyToken");

homeRouter.get("/addbook", homeSiteController.insertBook);
homeRouter.get("/", verifyAccessToken, homeSiteController.index);

module.exports = homeRouter;
