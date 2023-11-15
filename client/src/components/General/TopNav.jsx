import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    setIsLoggedIn(!!profile); // !! converts the value to a boolean
  }, []);

  const logout = () => {
  localStorage.removeItem('profile');
  setIsLoggedIn(false); // Update state to reflect logout
  window.location.reload(); // Reload the page after logout
};


  return (
    <div className="topNav">
     
      <div className="content">
        Unlock a World of Insight: Join our community of thinkers 👉🏿{" "}
      </div>
      <div className="authBtns">
        {isLoggedIn ? (
          <>
          <button onClick={logout}>LOGOUT</button>
          <Link to='/dashboard' >
          <button title="Dashboard" ><i class='bx bxs-dashboard'   ></i><span style={{"paddingLeft":"1rem"}} >Dashboard</span></button>
          </Link>
          </>
        ) : (
          <>
            <Link to="/auth">
              <button>LOGIN</button> 
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNav;
