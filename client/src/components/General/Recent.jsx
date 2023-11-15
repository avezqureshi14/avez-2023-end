import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTimeAgo } from "../../utility/time";
import { Link } from "react-router-dom";
const Recent = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const truncate = (title) => {
    const words = title?.split(" ");
    const truncatedTitle = words?.slice(0, 2)?.join(" ");
    return truncatedTitle;
  };
  return (
    <div className="blog_Category">
      <div className="heading">
        <h3>Recent Posts</h3>
      </div>
      {posts &&
        posts.slice(0,4).map((post) => {
          return (
            <div className="recent_Content_Container">
              <div className="recent_image">
                <img src={post.image} alt="" />
              </div>
              <div className="recent_content">
              <Link to={`/blog/${post._id}`} >
              <div className="topic">  {truncate(post.title)}</div>
              </Link>
                <div className="time">{getTimeAgo(post.createdAt)}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Recent;
