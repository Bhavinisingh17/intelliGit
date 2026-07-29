import React from 'react'
import "./sideBar.css";
import { Link } from "react-router-dom";



function Sidebar() {
  return (
 <div className="sidebar">

    <div className="logo">
        ✨ <h2>IntelliGit</h2>
    </div>

    <nav className="menu">

        <Link to="/" className="menu-item">
            📊 Dashboard
        </Link>

        <Link to="/profile" className="menu-item">
            👤 Profile
        </Link>

        <Link to="/repo" className="menu-item">
            📂 Repositories
        </Link>

        <Link to="/stats" className="menu-item">
            📈 Statistics
        </Link>

        <Link to="/analysis" className="menu-item">
            🤖 AI Analysis
        </Link>

        <Link to="/settings"className="menu-item">
            ⚙️ Settings
        </Link>

    </nav>

    <button className="logout">
        Logout
    </button>

</div>
  )
}

export default Sidebar
