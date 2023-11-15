import React, { useEffect, useState } from "react";
import Blogs from "../components/Home/Blogs";
import HSide from "../components/Home/HSide";
import HNav from "../components/Home/HNav";
import Recommendation from "../components/Home/Recommendation";
import WriteIlu from "../components/Home/WriteIlu";
import { NavLink } from "react-router-dom";
import Creator from "../components/Home/Creator";
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    setIsLoggedIn(!!profile); // !! converts the value to a boolean
  }, []);

  return (
    <>
      <HNav />
      <main>
        <div className="space1"></div>
        <div className="articleSpace2">
          <div className="blogPostsContainer">
          <NavLink to='/write' >
          <WriteIlu/>
          </NavLink>
          {
            isLoggedIn ? (
              <Recommendation />
              ) : <></>
          }
            <Blogs />
          </div>
          <div className="sidebar_container">
            <HSide />
          </div>
        </div>
        <div className="space3"></div>
      </main>
      <Creator/>
    </>
  );
};

export default Home;
