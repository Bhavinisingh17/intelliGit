const express = require("express");
const router = express.Router();

const {
    analyzeGithub
} = require("../controller/aiController");

router.post("/analysis", analyzeGithub);
module.exports = router;