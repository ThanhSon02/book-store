const express = require("express");
const userController = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/login", userController.login);
authRouter.post("/register", userController.register);

module.exports = authRouter;
