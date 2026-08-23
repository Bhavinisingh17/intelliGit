const mongoose = require("mongoose");

const searchHistorySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    avatar: {
        type: String,
        required: true
    },
    
    searchedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("SearchHistory", searchHistorySchema);