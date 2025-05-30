const express = require("express");

const verifyAuth = require("../middlewares/verifyAuth.middleware");
const authController = require("../controllers/auth.controller");

const authRoutes = express.Router();

authRoutes.post("/signin", authController.signin);

authRoutes.post("/signup", authController.signup);

authRoutes.delete("/signout", verifyAuth, authController.Signout);

module.exports = authRoutes;
