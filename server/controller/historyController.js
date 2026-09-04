const SearchHistory = require("../models/searchHistory");

////CONTROLLER IS FOR ALL LOGIC


// =========================
// GET HISTORY
// =========================

const getHistory = async (req, res) => {
    try {

        const history = await SearchHistory
            .find({
              userId: req.user._id
            })
            .sort({ searchedAt: -1 })
            .limit(5);


        res.status(200).json(history);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Failed to retrieve history"
        });

    }
};


// =========================
// ADD HISTORY
// =========================

const addHistory = async (req, res) => {

    try {

        const { username, avatar } = req.body;

        const newHistory = new SearchHistory({
            userId: req.user._id,
            username,
            avatar,
            searchedAt: new Date()
        });

        const savedHistory = await newHistory.save();

      
        res.status(201).json(savedHistory);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Failed to save history"
        });

    }
};


// =========================
// DELETE ONE HISTORY
// =========================

const deleteHistory = async (req, res) => {

    try {
        const { id } = req.params;
        const deletedHistory =
            await SearchHistory.findOneAndDelete(
                {_id: id,
                userId: req.user._id
                }
            );
        if (!deletedHistory) {
            return res.status(404).json({
                error: "History not found"
            });
        }
        console.log("Deleted:", deletedHistory);
        res.status(200).json({
            message: "History deleted successfully",
            deletedHistory
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Failed to delete history"
        });

    }
};


// =========================
// DELETE ALL HISTORY
// =========================

const clearHistory = async (req, res) => {

    try {

        await SearchHistory.deleteMany({ 
             userId: req.user._id
});

        console.log("All history deleted");

        res.status(200).json({
            message: "All history deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Failed to clear history"
        });

    }
};


module.exports = {
    getHistory,
    addHistory,
    deleteHistory,
    clearHistory
};