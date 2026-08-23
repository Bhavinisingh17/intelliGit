import React, { useState } from "react";
import "./sideBar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);

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
          ✨ <h2>IntelliGit</h2>
          {/* Close button — only shows on mobile */}
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

        <button className="logout">Logout</button>
      </div>
    </>
  );
}

export default Sidebar;