const express = require("express");
const router = express.Router();


const {
    getGithubProfile
} = require("../controller/getGithubController");

router.get("/:username", getGithubProfile);
module.exports = router;