const getGithubProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const [userRes, repoRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos`)
        ]);

        const user = await userRes.json();
        const repos = await repoRes.json();

        res.json({
            user,
            repos
        });
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

module.exports = {
    getGithubProfile
};