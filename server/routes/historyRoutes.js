const express = require("express");

const router = express.Router();

const {
    getHistory,
    addHistory,
    deleteHistory,
    clearHistory
} = require("../controller/historyController");

router.get("/", getHistory);

router.post("/", addHistory);   

router.delete("/:id", deleteHistory);

router.delete("/", clearHistory);

module.exports = router;