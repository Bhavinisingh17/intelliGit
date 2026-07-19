import React from 'react'
import { useState } from "react";


function SearchBar() {

const [userName, setUsername] = useState("");
const [user, setUser] = useState(null);


async function fetchUser(){
  try {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();
  setUser(data);
  console.log(data);
  setUsername("");
  }
   catch(e){
   console.log(e);
   }
}

let handleInputChange = (event) => {
  setUsername(event.target.value);
};


  return (
    <div>
      <h1>Welcome to intelliGit</h1>
      <input type="text"
      placeholder="Enter Github Profile"
      value={userName}
      onChange={handleInputChange}
      >
      </input>

      <button onClick={fetchUser}>Clicked</button>

     {user ?
    (
    <>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
    </a>

    <p>Username: {user.login}</p>
    <p>Followers: {user.followers}</p>
    <p>Following: {user.following}</p>
      </>

    ) :  
     <p>No such user exists.</p>
}
 </div>
  )
}

export default SearchBar
