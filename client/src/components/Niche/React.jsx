import axios from "axios";
import React, { useEffect, useState } from "react";
import AllPost from "../All Posts/AllPost";
import { Link} from "react-router-dom";

const ReactComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Fetch the list of categories from the API when the component mounts.
    async function fetchBlogs() {
      try {
        const response = await axios.get(
          `https://avez-blog-2023-end.onrender.com/blogs/category/6555104ffb1346c60b3a12be`
        );
        setPosts(response.data.blogs);
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    }
    fetchBlogs();
  }, []);
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

export default ReactComponent;
