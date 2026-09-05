const { generateAnalysis } = require("../services/aiService");

const analyzeGithub = async(req, res) => {
    try {

        const githubData = req.body;
        const analysis =await generateAnalysis(githubData);
         res.status(200).json({
            success: true,
            analysis: analysis
        });
    }catch (error) {

        console.error("AI Analysis Error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate AI analysis"
        });
    } 
}

module.exports = { analyzeGithub };