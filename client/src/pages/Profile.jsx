import React, { useEffect, useState } from "react";
import HNav from "../components/Home/HNav";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Creator from "../components/Home/Creator";
const Profile = () => {
  const id = useParams();
  const userId = id.id;
  const [user, setUser] = useState([]);
  useEffect(() => {
    // Fetch the list of categories from the API when the component mounts.
    async function fetchCreators() {
      try {
        const response = await axios.get(
          `http://localhost:8800/user/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    }
    fetchCreators();
  }, []);
  console.log(userId.id);
  const truncate = (title) => {
    const words = title?.split("@");
    const truncatedTitle = words?.slice(0, 1)?.join(" ");
    return truncatedTitle;
  };
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          `http://localhost:8800/blogs/user/${userId}`
        );
        setUserData(response.data.blogs);
      } catch (error) {
        // Handle error
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, [userId]);
  const userName = truncate(user.email);
  const totalPosts = userData.length;
  let totalLikes = 0;
  userData.map((blog) => {
    totalLikes = totalLikes + blog.likes.length;
  });
  console.log(userData)
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
                        <Link
                          className="abtdescription"
                          to={`/blog/${blog._id}`}
                        >
                          <div class="description two-line-ellipsis">
                            {blog.content}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div class="space3"></div>
      </main>
      <Creator/>
    </>
  );
};

export default Profile;
