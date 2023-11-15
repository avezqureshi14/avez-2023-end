import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import AllPost from "./AllPost";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Dispatch an action to fetch all posts when the component mounts
    dispatch(getPosts());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

// Assuming posts is your array of objects containing posts

const filteredPosts = posts.filter((post) => {
  const searchTermLower = searchTerm.toLowerCase();
  const titleLower = post.title.toLowerCase();
  const contentLower = post.content.toLowerCase();
  
  // Check if any of the fields contain the search term
  return (
    titleLower.includes(searchTermLower) ||
    contentLower.includes(searchTermLower) 
  );
});

  return (
    <>
      <div className="bottomNav">
        <Link to="/">
          <div className="logo">
            <h2>Avez's Blog</h2>
          </div>
        </Link>
        <div className="searchBar" style={{ width: "49%" }}>
          <input
            placeholder="Search here..."
            type="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="blogPostsContainer">
        {filteredPosts.length === 0 ? (
          <div className="no-results-message">
            <p>No results found for "{searchTerm}"</p>
          </div>
        ) : (
          <div className="art_cards allPost">
            {filteredPosts.map((post) => (
              <AllPost key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllPosts;
