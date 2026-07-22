import React from 'react'
import { useState } from 'react'


function repo({repos}) {


  return (
    <div className='repo'>
        {repos.map((item) => (
           <div className='card' key = {item.id}>
              <h1>{item.name}</h1>
              <p>{item.language}</p>
<p>Last Push: {new Date(item.pushed_at).toLocaleDateString()}</p>
<p>Last Updated: {new Date(item.updated_at).toLocaleDateString()}</p>           </div>
        ))}
    </div>
  )

}

export default repo
