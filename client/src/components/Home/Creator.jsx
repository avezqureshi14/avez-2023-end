import React, { useEffect, useState } from "react";
import SwiperCreator from "./Swiper";

const Creator = ({communityRef}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#43b85c"
          fill-opacity="1"
          d="M0,0L120,37.3C240,75,480,149,720,181.3C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <div class="sectionPopular"  id="community"  >
        <div class="popularContainer" >
          <div class="popularHeading" >
            <span>Our Community </span>
          </div>
          <div class="creators">
            <SwiperCreator  />;
          </div>
          <h3 className="swipeMore">Swipe for more</h3>
        </div>
      </div>

      <svg
        style={{ marginBottom: "-2rem" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#43b85c"
          fill-opacity="1"
          d="M0,0L120,37.3C240,75,480,149,720,181.3C960,213,1200,203,1320,197.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <svg
        style={{ marginTop: "-21rem" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,0L120,37.3C240,75,480,149,720,181.3C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div class="sectionBlogInfo">Created with 💓 by Avez Qureshi</div>
    </>
  );
};

export default Creator;
