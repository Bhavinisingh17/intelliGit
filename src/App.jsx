import SearchBar from './components/SearchBar'
import './App.css'
import Repo from './components/repo';
import { useState } from "react";


function App() {
  const [userName, setUsername] = useState("");
    const [user, setUser] = useState(null);

  const [repos, setRepos] = useState([]);

async function handleGenerate(){
  const userRes = await fetch(`https://api.github.com/users/${userName}`);
  const userData = await userRes.json();
  console.log(userData);
  setUser(userData);

  const repoRes = await fetch(`https://api.github.com/users/${userName}/repos`);
  const repoData = await repoRes.json();
  setRepos(repoData);
}

  return (
    <>
     <SearchBar 
     userName={userName}
     setUsername={setUsername}
     ></SearchBar>

           <button onClick={handleGenerate}>Generate</button>
           <div className='profile'>
 {user && (
        <>
 <img
    src={user.avatar_url}
    alt={user.login}
    className="profile-img"
  />     
  <div className='user-info'>
    
           <h2>{user.name}</h2>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a href={user.html_url}>@{user.login}</a>
  </div>
  
        </>
      )}
      </div>
     <Repo repos={repos}></Repo>
    </>
  )
}

export default App
