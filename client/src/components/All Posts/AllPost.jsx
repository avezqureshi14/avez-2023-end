import React from "react";
import { Link } from "react-router-dom";

const AllPost = ({post}) => {
  return (
    <>
      <div className="art_card">
        <div className="image">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="content">
        <div
        className="art_title"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
        <Link to={`/blog/${post._id}`}>
        <h2>{post.title}</h2>
        </Link>
          </div>
          <div
            className="art_words one-line-ellipsis"
            style={{ marginTop: "1rem", marginBottom: "2rem" }}
          >
            <p>
              {post.content}
            </p>
          </div>
          <Link to={`/blog/${post._id}`} className="artBtn">
          Read More
        </Link>
        </div>
      </div>
    </>
  );
};

export default AllPost;
