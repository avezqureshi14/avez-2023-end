import React from "react";
import Video from "./Video";
import News from "./News";

const ASide = ({blogData}) => {
  return (
    <>
      <div className="sidebar_container">
        <Video  blogData={blogData}  />
        <News blogData={blogData} />
    </div>
    </>
  );
};

export default ASide;
