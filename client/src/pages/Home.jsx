import React, { useEffect, useState } from "react";
import Blogs from "../components/Home/Blogs";
import HSide from "../components/Home/HSide";
import HNav from "../components/Home/HNav";
import Recommendation from "../components/Home/Recommendation";
import WriteIlu from "../components/Home/WriteIlu";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Creator from "../components/Home/Creator";
import Feature from "./Feature";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const reload = queryParams.get("reload");
  const navigate = useNavigate();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setIsLoggedIn(!!profile); // !! converts the value to a boolean
  }, []);

  useEffect(() => {
    if (reload === "true") {
      // Remove the reload query parameter to avoid continuous reloads
      const newSearch = new URLSearchParams(search);
      newSearch.delete("reload");
      navigate({ search: newSearch.toString() });

      // Reload the page after necessary actions
      window.location.reload();
    }
  }, [reload, search, navigate]);

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
          <Feature/>
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
