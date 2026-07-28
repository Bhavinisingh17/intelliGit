import React from 'react'
import "./sideBar.css";


function Sidebar() {
  return (
 <div className="sidebar">

    <div className="logo">
        ✨ <h2>IntelliGit</h2>
    </div>

    <nav className="menu">

        <div className="menu-item active">
            📊 Dashboard
        </div>

        <div className="menu-item">
            👤 Profile
        </div>

        <div className="menu-item">
            📂 Repositories
        </div>

        <div className="menu-item">
            📈 Statistics
        </div>

        <div className="menu-item">
            🤖 AI Analysis
        </div>

        <div className="menu-item">
            ⚙️ Settings
        </div>

    </nav>

    <button className="logout">
        Logout
    </button>

</div>
  )
}

export default Sidebar
