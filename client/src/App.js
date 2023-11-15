import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import AllBlogs from "./pages/AllBlogs";
import Write from "./pages/Write";
import TopNav from "./components/General/TopNav";
import Footer from "./components/General/Footer";
import "./App.css";
import "./assets/css/article.css";
import SingleBlog from "./pages/SingleBlog";
import Auth from "./pages/Auth";
import Category from "./components/General/Category";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Update from "./pages/Update";
import Bookmarks from "./components/General/Bookmarks";
import ReactComponent from "./components/Niche/React";
import MongoDB from "./components/Niche/MongoDB";
import Express from "./components/Niche/Express";
import Node from "./components/Niche/Nodejs";
const App = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  let isAuthenticated; // Use let instead of const if the value changes

  if (profile === null) {
    isAuthenticated = false;
  } else {
    isAuthenticated = true;
  }
  console.log(isAuthenticated);
  return (
    <>
    <div className="none" >Not Supported on Smaller Screens </div>
    <div className="App">
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/reactjs" element={<ReactComponent />} />
          <Route path="/mongodb" element={<MongoDB />} />
          <Route path="/express" element={<Express />} />
          <Route path="/nodejs" element={<Node />} />

          <Route
            path="/write"
            element={isAuthenticated ? <Write /> : <Navigate to="/auth" />}
          />
          

          <Route
            path="/update/:id"
            element={isAuthenticated ? <Update /> : <Navigate to="/auth" />}
          />

          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
          />

          <Route
            path="/bookmarks"
            element={isAuthenticated ? <Bookmarks /> : <Navigate to="/auth" />}
          />

          <Route
            path="/category"
            element={<Category/>}
          />

          <Route
            path="/auth"
            element={!isAuthenticated ? <Auth /> : <Navigate to="/" />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
    </>
  );
};

export default App;
