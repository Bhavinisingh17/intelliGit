const express = require("express");

const router = express.Router();

const {
    getHistory,
    addHistory,
    deleteHistory,
    clearHistory
} = require("../controller/historyController");

const protect = require("../middleware/authMiddleware");


router.get("/", protect, getHistory);

router.post("/", protect, addHistory);   

router.delete("/:id", protect, deleteHistory);

router.delete("/", protect, clearHistory);

module.exports = router;