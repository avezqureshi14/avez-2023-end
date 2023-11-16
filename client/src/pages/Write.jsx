import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { createPost } from "../actions/posts"; // Assuming this action is properly defined in your project
import HNav from "../components/Home/HNav";

const Text = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // Fetch the list of categories from the API when the component mounts.
    async function fetchCategories() {
      try {
        const response = await axios.get("https://avez-blog-2023-end.onrender.com/categories");
        setCategories(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const handleCreatePost = async () => {
    try {
      const newPost = {
        title,
        content,
        category: selectedCategory,
        image,
      };

      // Dispatch an action to create a post
      dispatch(createPost(newPost));

      setSuccessMessage("Post created successfully.");
      // Clear the form
      setTitle("");
      setContent("");
      setSelectedCategory("");
      setImage("");
      navigate("/");
    } catch (error) {
      setErrorMessage("Error creating post. Please check your input.");
      // Handle error
      console.error("Error creating post:", error);
    }
  };

  return (
<>
    <HNav/>
    <div className="art_card writeCard">
      <div className="content blog_inside_content">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <NavLink to='/category' >
        <button  className="artBtn">
        Add New Category
        </button>
        </NavLink>
        <div className="art_title" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <input
            type="text"
            className="art_single_title"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div
          className="art_title"
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          <input
            type="text"
            className="art_single_title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="art_words" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          <textarea
            name=""
            className="art_single_post"
            id=""
            cols="30"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handleCreatePost} className="artBtn">
          Publish
        </button>
      </div>
    </div>
    </>
  );
};

export default Text;
