import React, { useEffect, useState } from "react";
import HNav from "../Home/HNav";
import { Link } from "react-router-dom";
import axios from "axios";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBookmark() {
      try {
        const token = JSON.parse(localStorage.getItem("profile")).token;

        const response = await axios.get(`https://avez-blog-2023-end.onrender.com/bookmark`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookmarks(response.data);
        
        const blogIds = response.data.map(bookmark => bookmark.blogId);
        if(blogIds.length > 0) {
          const blogsResponse = await axios.post(`https://avez-blog-2023-end.onrender.com/blogs/multiple`, { blogIds }, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setBlogs(blogsResponse.data);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching bookmarks:", error);
      }
    }
    fetchBookmark();
  }, []);

  return (
    <>
      <HNav />
      <main>
        <div className="space1"></div>
        <div className="article_container userProfContainer">
          <div className="art_card userProfile">
            <div className="userProfS3">
              <h2>Bookmarked Posts</h2>
              <div>
                {blogs &&
                  blogs.map((blog) => (
                    <div className="posts" key={blog._id}>
                      <Link to={`/blog/${blog._id}`}>
                        <h3>{blog.title}</h3>
                      </Link>
                      <Link className="abtdescription" to={`/blog/${blog._id}`}>
                        <div className="description two-line-ellipsis">
                          {blog.content}
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space3"></div>
      </main>
    </>
  );
};

export default Bookmarks;
