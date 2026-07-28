import SearchBar from './components/SearchBar'
import './App.css'
import Repo from './components/repo';
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { useState } from "react";


function App() {
  const [userName, setUsername] = useState("");
    const [user, setUser] = useState(null);

  const [repos, setRepos] = useState([]);

async function handleGenerate() {
  const response = await fetch(
    `http://localhost:5000/api/github/${userName}`
  );

  const data = await response.json();

  setUser(data.user);
  setRepos(data.repos);
}

 return (
  <div className="app">

    <Sidebar />

    <div className="main-content">

   <SearchBar
    userName={userName}
    setUsername={setUsername}
    handleGenerate={handleGenerate}
  >
  </SearchBar>



      <div className="profile">
        {user && (
          <>
            <img
              src={user.avatar}
              alt={user.username}
              className="profile-img"
            />

            <div className="user-info">
              <h2>{user.name}</h2>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Public Repositories: {user.publicRepos}</p>
              <a href={user.url}>@{user.username}</a>
            </div>
          </>
        )}
      </div>

      <Repo repos={repos} />

    </div>

  </div>
);
}

export default App
