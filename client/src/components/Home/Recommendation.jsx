import axios from "axios";
import React, { useEffect, useState } from "react";
import { getTimeAgo } from "../../utility/time";
import { NavLink } from "react-router-dom";

const Recommendation = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const catId = profile.result.category;
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    // Fetch the list of categories from the API when the component mounts.
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          `https://avez-blog-2023-end.onrender.com//blogs/category/${catId}`
        );
        setBlogData(response.data.blogs);
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    }
    fetchBlogs();
  }, [catId]);
  const data1 = blogData.slice(0, 2);
  const data2 = blogData.slice(2, 4);
  const truncateTitle = (title) => {
    const words = title.split(' ');
    const truncatedTitle = words.slice(0, 5).join(' ');
    return truncatedTitle;
  };
  return (
    <>
      <div className="recommendedBlogContainer">
        <div className="recommendHeading">
          <h2>Recommended Articles for you</h2>
        </div>
        <div className="recommendations">
          <div className="recCol">
            {data1 &&
              data1.map((data) => {
                return (
                  <NavLink  to={`/blog/${data._id}`} >
                  <div className="recommendedBlog">
                  <div className="recommendedblogContent">
                      <div className="recommendedImage">
                        <img
                        src={data.image}
                        
                        />
                      </div>
                      <div className="recommendedContent">
                        <p className="rtitle zero-line-ellipsis">
                        {truncateTitle(data.title)}...
                        </p>
                        <p className="rContent zero-line-ellipsis">
                        { getTimeAgo(data.createdAt) }
                        </p>
                        </div>
                        </div>
                        </div>
                        </NavLink>
                );
              })}
          </div>
          <div className="recCol">
            {data2 &&
              data2.map((data) => {
                return (
                  <NavLink  to={`/blog/${data._id}`} >
                  <div className="recommendedBlog">
                  <div className="recommendedblogContent">
                      <div className="recommendedImage">
                        <img
                        src={data.image}
                        
                        />
                      </div>
                      <div className="recommendedContent">
                        <p className="rtitle zero-line-ellipsis">
                        {truncateTitle(data.title)}...
                        </p>
                        <p className="rContent zero-line-ellipsis">
                        { getTimeAgo(data.createdAt) }
                        </p>
                        </div>
                        </div>
                        </div>
                        </NavLink>               );
              })}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Recommendation;
