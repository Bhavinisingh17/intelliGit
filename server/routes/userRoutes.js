const express = require("express");

const router = express.Router();

const {
    register,
    login,
    changePass,
    sendUserPasswordResetEmail,
    userPasswordReset
} = require("../controller/authController");

const middleware = require("../middleware/authMiddleware");

// Public routes
router.post("/register", register);
router.post("/login", login);
router.post("/send-reset-password-email", sendUserPasswordResetEmail);
router.post("/send-reset-password/:id/:token", userPasswordReset);


// Protected route
router.post("/changepassword", middleware, changePass);

module.exports = router;
