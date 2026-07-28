import React from 'react'
import { useState } from 'react'


function repo({repos=[]}) {


  return (
    <div className='repo'>
        {repos.map((item) => (
           <div className='card' key = {item.name}>
              <h1>{item.name}</h1>
              <p>{item.language}</p>
                <p>
            ⭐ Stars: {item.stars}
          </p>
            <p>
            🍴 Forks: {item.forks}
          </p>
         {item.description && (
  <p>Description: {item.description}</p>
)}
          <a href={item.url} target="_blank">
            View Repository
          </a>
       </div>
        ))}
    </div>
  )

}

export default repo
