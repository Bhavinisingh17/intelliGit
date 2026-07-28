const getGithubProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const [userRes, repoRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos`)
        ]);

        const user = await userRes.json();
        const repos = await repoRes.json();

const formattedRepos = repos.map(repo => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    url: repo.html_url
}));


         res.json({
            user: {
                name: user.name,
                username: user.login,
                avatar: user.avatar_url,
                followers: user.followers,
                following: user.following,
                publicRepos: user.public_repos,
                url: user.html_url
            },
            repos: formattedRepos
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