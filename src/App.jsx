import SearchBar from './components/SearchBar'
import './App.css'
import Repo from './components/repo';
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Profile from "./components/profile/profile.jsx";
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
   <Routes>
         <Route path="/" element={<Dashboard user={user} />}></Route>
          <Route path="/profile" element={<Profile user={user}/>}></Route>
         <Route path="/repo" element={<Repo repos={repos}/>} />
      </Routes>

    </div>

  </div>
);
}

export default App
