import React from 'react'

function profile({user}) {
  return (
    <div>
      
      <div className="profile">
        {user && (
          <>
            <img
              src={user.avatar}
              alt={user.username}
              className="profile-img"
            />

            <div className="user-info">
              <h2>{user.name}</h2>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Public Repositories: {user.publicRepos}</p>
              <a href={user.url}>@{user.username}</a>
            </div>
          </>
        )}
      </div>

    </div>
  )
}

export default profile
