const express = require("express");
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");

const userRouter = express.Router();

userRouter.get("/info", verifyToken, userController);

module.exports = userRouter;
