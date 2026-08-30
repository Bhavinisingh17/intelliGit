import React, { useState } from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";

function Sidebar({ isLoggedIn, setIsLoggedIn }) {
  const [open, setOpen] = useState(false);
    const handleLogout = () => {
    setIsLoggedIn(false);
    setOpen(false);
  };


  return (
    <>
      {/* Hamburger button — only visible on mobile via CSS */}
      <button
        className="sidebar-toggle"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Dark backdrop behind the drawer — only visible on mobile when open */}
      <div
        className={`sidebar-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="logo">
   <h1 className="text-4xl font-bold text-[#2F241D]">
                        Intelli<span className="text-[#9A6848]">Git</span>
                    </h1>          {/* Close button — only shows on mobile */}
          <button
            className="sidebar-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="menu">
          <Link to="/" className="menu-item" onClick={() => setOpen(false)}>
            📊 Dashboard
          </Link>

          <Link to="/profile" className="menu-item" onClick={() => setOpen(false)}>
            👤 Profile
          </Link>

          <Link to="/repo" className="menu-item" onClick={() => setOpen(false)}>
            📂 Repositories
          </Link>

          <Link to="/stats" className="menu-item" onClick={() => setOpen(false)}>
            📈 Statistics
          </Link>

          <Link to="/analysis" className="menu-item" onClick={() => setOpen(false)}>
            🤖 AI Analysis
          </Link>

          <Link to="/settings" className="menu-item" onClick={() => setOpen(false)}>
            ⚙️ Settings
          </Link>
        </nav>

 {!isLoggedIn ? (
    <>
        <Link
            to="/signup"
            className="logout"
            onClick={() => setOpen(false)}
        >
            Signup
        </Link>

        <Link
            to="/login"
            className="logout"
            onClick={() => setOpen(false)}
        >
            Login
        </Link>
    </>
) : (
    <button
        className="logout"
        onClick={handleLogout}
    >
        Logout
    </button>
)}    
        </div>
    </>
  );
}

export default Sidebar;