import React from 'react'
import { useState } from "react";


function SearchBar({userName, setUsername}) {

const [user, setUser] = useState(null);


async function fetchUser(){
  try {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();
  setUser(data);
  console.log(data);
  }
   catch(e){
   console.log(e);
   }
}

let handleInputChange = (event) => {
    console.log("Typing:", event.target.value);

setUsername(event.target.value);
};


  return (
    <div className='hero'>
      <h1>Welcome to intelliGit</h1>
      <input type="text"
      placeholder="Enter Github Profile"
      value={userName}
      onChange={handleInputChange}
      style={{color: "white"}}
      >
      </input>

      <button onClick={fetchUser}>Search</button>
     <br></br>
     
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
