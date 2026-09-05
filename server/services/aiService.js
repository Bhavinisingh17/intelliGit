const ai = require("../config/gemini");

const generateAnalysis = async (githubData) => {

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",

        contents: `
Analyze the following GitHub developer profile.

GitHub Data:
${JSON.stringify(githubData)}

Analyze the developer based ONLY on the provided GitHub data.

Return ONLY valid JSON.
Do not use markdown.
Do not add explanations before or after the JSON.

Use exactly this structure:

{
    "strengths": [
        "strength 1",
        "strength 2",
        "strength 3"
    ],
    "improvements": [
        "improvement 1",
        "improvement 2",
        "improvement 3"
    ],
    "standoutRepositories": [
        {
            "name": "repository name",
            "reason": "why this repository stands out"
        }
    ],
    "codingActivity": {
        "summary": "short description of the developer's coding activity",
        "activityLevel": "Low / Moderate / High",
        "languages": [
            "JavaScript",
            "Java"
        ]
    },
    "summary": "A concise overall summary of the developer."
}

Rules:

- strengths must contain 3 to 5 items.
- improvements must contain 3 to 5 actionable items.
- standoutRepositories should contain the most impressive repositories from the provided data.
- Do not invent repositories, technologies, commits, or activity.
- If information is unavailable, say so instead of guessing.
- codingActivity must be based only on the provided GitHub data.
- Keep the language clear and easy to understand.
- Keep each point concise.
`
    });

    const text = response.text;

    // Remove accidental markdown code fences if Gemini adds them
    const cleanedText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    return JSON.parse(cleanedText);
};

module.exports = { generateAnalysis };
