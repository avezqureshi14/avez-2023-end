import React, { useEffect, useState } from "react";
import HNav from "../components/Home/HNav";
import axios from "axios";
import { Link } from "react-router-dom";
import LineChart from "../components/General/LineChart";
import LikesVsPostsChart from "../components/General/LikevsPost";

const Dashboard = () => {
  const profile = JSON.parse(localStorage.getItem("profile"));
  const user = profile.result;
  const userId = user._id;
  console.log(userId);
  const truncate = (title) => {
    const words = title.split("@");
    const truncatedTitle = words.slice(0, 1).join(" ");
    return truncatedTitle;
  };
  const userName = truncate(user.email);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const token = JSON.parse(localStorage.getItem("profile")).token;
        const response = await axios.get(
          `https://avez-blog-2023-end.onrender.com/blogs/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data.blogs);
      } catch (error) {
        // Handle error
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, [userId]);

  const handleDelete = async (blogId) => {
    try {
      const token = JSON.parse(localStorage.getItem("profile")).token;
      await axios.delete(`https://avez-blog-2023-end.onrender.com/blogs/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
      // After successful deletion, update the user data by refetching the blogs
    } catch (error) {
      // Handle error
      console.error("Error deleting blog:", error);
    }
  };
  
  console.log(userData);
  const totalPosts = userData.length;
  let totalLikes = 0 
  userData.map((blog)=>{
    totalLikes = totalLikes + blog.likes.length;  
  })
  return (
    <>
      <HNav />
      <main>
        <div class="space1"></div>
        <div class="article_container userProfContainer">
          <div class="art_card userProfile">
            <div class="userProfS1">
              <div class="image">
                <img src={user.imageUrl} />
              </div>
              <div class="content">
                <div class="userPersona">
                  <h4>Username : @{userName}</h4>
                  <h4>Email : {user.email}</h4>
                </div>
                <div class="userProfStats">
                  <div class="totalPosts">
                    {totalPosts} <br />
                    <span>Posts</span>{" "}
                  </div>
                  <div class="totalPosts">
                    {totalLikes} <br />
                    <span>Likes</span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="analytics">
              <div className="chart1">
              <LineChart userData={userData} />
              </div>
              <div className="chart1">
              <LikesVsPostsChart userData={userData} />
              </div>
            </div>
            <div class="userProfS2">
              <h4>About Me 👋</h4>
              <div class="description">{user.bio}</div>
            </div>
            <div class="userProfS3">
              <h2>Recent Posts</h2>

              <div>
                {userData &&
                  userData.map((blog) => {
                    return (
                      <div class="posts">
                        <Link to={`/blog/${blog._id}`}>
                          <h3>{blog.title}</h3>
                        </Link>
                        <Link className="abtdescription" to={`/blog/${blog._id}`}>
                          <div class="description two-line-ellipsis">
                            {blog.content}
                          </div>
                        </Link>
                        <div class="userActions">
                          <Link to={`/update/${blog._id}`}>
                            <div
                              class="updatePost actionPost"
                              style={{ marginRight: "1rem" }}
                            >
                              <div class="text">
                                <i class="bx bx-edit-alt"></i>
                                <h5>Update</h5>
                              </div>
                            </div>
                          </Link>
                          <div class="deletePost actionPost" onClick={() => handleDelete(blog._id)} >
                            <div class="text">
                              <i class="bx bx-message-square-x"></i>
                              <h5>Delete</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div class="space3"></div>
      </main>
    </>
  );
};

export default Dashboard;
