import SearchBar from './components/SearchBar'
import './App.css'
import Repo from './components/repo';
import { useState } from "react";


function App() {
  const [userName, setUsername] = useState("");

  return (
    <>
     <SearchBar 
     userName={userName}
     setUsername={setUsername}
     ></SearchBar>
     <Repo userName={userName}></Repo>
    </>
  )
}

export default App
