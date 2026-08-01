import React from 'react'
import { useState } from "react";


function SearchBar({ userName, setUsername, handleGenerate }) {
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <input
          type="text"
          placeholder="Enter GitHub Profile"
          value={userName}
          onChange={handleInputChange}
        />

        <button onClick={handleGenerate}>
          Generate
        </button>
      </div>

      <div className="hero-right">
        <p>Search</p>
        <p>Notification</p>
      </div>
    </div>
  );
}

export default SearchBar;