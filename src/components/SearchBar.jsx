import React from 'react'
import { useState } from "react";


function SearchBar({userName, setUsername}) {

let handleInputChange = (event) => {
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
   
 </div>
  )
}

export default SearchBar
