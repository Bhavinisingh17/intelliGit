import React from 'react'
import { useState } from 'react'


function repo({userName}) {
    const[repo, setRepo] = useState("");
// console.log(`https://api.github.com/users/${userName}/repos`);
async function fetchRepo(){
     try {
     const res = await fetch(`https://api.github.com/users/${userName}/repos`);
     const data = await res.json();
     setRepo(data);
     console.log(data);
     setRepo("");
  }
   catch(e){
   console.log(e);
   }
  }
 



  return (
    <div>
      <button onClick={fetchRepo}>Generate Repo</button>
    </div>
  )
}

export default repo
