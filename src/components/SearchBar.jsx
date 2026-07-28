import React from 'react'
import { useState } from "react";


function SearchBar({userName, setUsername, handleGenerate }) {

let handleInputChange = (event) => {
setUsername(event.target.value);
};


  return (
    <div className='hero'>
      <input type="text"
      placeholder="Enter Github Profile"
      value={userName}
      onChange={handleInputChange}
      >
      </input>
   <button onClick={handleGenerate}>
        Generate
      </button>
      <p>Search</p>
      <p>notification</p>
   
 </div>
  )
}

export default SearchBar
