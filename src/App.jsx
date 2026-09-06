import SearchBar from "./components/SearchBar";
import "./App.css";
import Repo from "./components/repo";
import { Routes, Route, Navigate} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Profile from "./components/profile/profile.jsx";
import Signup from "./components/authentication/signup.jsx";
import Login from "./components/authentication/login.jsx";
import ForgotPassword from "./components/authentication/forgotPassword";
import AI from "./components/aiAnalysis/ai.jsx";


import { useEffect, useState } from "react";

function App() {

  const [userName, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(  !!localStorage.getItem("token"));
  const [searchHistory, setSearchHistory] = useState([]);


  // =========================
  // GET HISTORY WHEN APP LOADS
  // =========================

  useEffect(() => {

    const fetchHistory = async () => {
       const token = localStorage.getItem("token");

      if (!token) {
            return;
        }

      try {

         const response = await fetch(
          "http://localhost:5000/api/history",
        {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
);

        const data = await response.json();

        console.log("History:", data);


        if (!response.ok) {
  console.error("History request failed:", data);

  setSearchHistory([]);

  // Token expired
  if (response.status === 401) {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

     return;

      } 
    setSearchHistory(Array.isArray(data) ? data : []);
    }

      
      catch (error) {

        console.log("History error:", error);

      }

    };

    fetchHistory();

  }, [isLoggedIn]);


  // =========================
  // SEARCH GITHUB
  // =========================

  async function handleGenerate() {

    if (!userName.trim()) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/github/${userName}`
      );

if (!response.ok) {
  const errorText = await response.text();
  
  throw new Error("GitHub API request failed");
}
      const data = await response.json();

      setUser(data.user);
      setRepos(data.repos);


      // =========================
      // SAVE SEARCH IN MONGODB
      // =========================
     const token = localStorage.getItem("token");
      const historyResponse = await fetch(
        "http://localhost:5000/api/history",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            username: data.user.username,
            avatar: data.user.avatar
          })
        }
      );


      // Get MongoDB document
      const newHistory = await historyResponse.json();


      // Show immediately in Dashboard
      setSearchHistory((prev) => [
        newHistory,
        ...prev
      ].slice(0, 5));

    } catch (error) {

      console.log("Generate error:", error);

    }

  } 

  // ~~~~~~~~~~// {when you clicked on handle generate then user generates
  // and history generates} //


  // =========================
  // DELETE ONE HISTORY ITEM
  // =========================

  const deleteHistory = async (id) => {

    try {
    const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/history/${id}`,
        {
          method: "DELETE",
           headers: {
          Authorization: `Bearer ${token}`
        }
        }
      );


      if (!response.ok) {
        throw new Error("Failed to delete history");
      }


      // Remove from UI
      setSearchHistory((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {

      console.log("Delete history error:", error);

    }

  };


  // =========================
  // DELETE ALL HISTORY
  // =========================

  const clearHistory = async () => {

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/api/history",
        {
          method: "DELETE",
           headers: {
          Authorization: `Bearer ${token}`
        }
        }
      );


      if (!response.ok) {
        throw new Error("Failed to clear history");
      }


      // Empty UI
      setSearchHistory([]);

    } catch (error) {

      console.log("Clear history error:", error);

    }

  };


  // =========================
  // RETURN
  // =========================

return (
  <Routes>

    ///forgot password router

    <Route path = "/forgot" element= {<ForgotPassword></ForgotPassword>}></Route>

    {/* Signup */}
    <Route
      path="/signup"
      element={<Signup />}
    />

    {/* Login */}
    <Route
      path="/login"
      element={
        <Login setIsLoggedIn={setIsLoggedIn} />
      }
    />

    {/* Dashboard */}
    <Route
  path="/"
  element={
    isLoggedIn ? (
      <div className="app">

        <Sidebar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <div className="main-content">

          <SearchBar
            userName={userName}
            setUsername={setUsername}
            handleGenerate={handleGenerate}
          />

          <Dashboard
            user={user}
            searchHistory={searchHistory}
            deleteHistory={deleteHistory}
            clearHistory={clearHistory}
          />

        </div>

      </div>
    ) : (
      <Navigate to="/login" />
    )
  }
/>

    {/* Profile */}
    <Route
      path="/profile"
      element={
        <div className="app">

          <Sidebar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />

          <div className="main-content">

            <SearchBar
              userName={userName}
              setUsername={setUsername}
              handleGenerate={handleGenerate}
            />

            <Profile user={user} />

          </div>

        </div>
      }
    />

    {/* Repository */}
    <Route
      path="/repo"
      element={
        <div className="app">

          <Sidebar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />

          <div className="main-content">

            <SearchBar
              userName={userName}
              setUsername={setUsername}
              handleGenerate={handleGenerate}
            />

            <Repo repos={repos} />

          </div>

        </div>
      }
    />

///AI ANALYSIS


    <Route
  path="/ai-analysis"
  element={
    isLoggedIn ? (
      <div className="app">
        <Sidebar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <div className="main-content">
     <AI user={user} repos={repos} />       
 </div>
      </div>
    ) : (
      <Navigate to="/login" />
    )
  }
/>

  </Routes>
);
}

export default App;