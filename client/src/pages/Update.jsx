import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updatePost } from "../actions/posts"; // Assuming this action is properly defined in your project
import HNav from "../components/Home/HNav";

const UpdatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams(); // Assuming the post ID is part of the URL params
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post data from the API when the component mounts.
    async function fetchPost() {
      try {
        const response = await axios.get(`https://avez-blog-2023-end.onrender.com//blogs/${id}`);
        const postData = response.data;
        setTitle(postData.title);
        setContent(postData.content);
        setSelectedCategory(postData.category);
        setImage(postData.image);
        // Fetch categories after post data to set selected category
        const categoryResponse = await axios.get("https://avez-blog-2023-end.onrender.com//categories");
        setCategories(categoryResponse.data);

      } catch (error) {
        // Handle error
        console.error("Error fetching post:", error);
      }
    }
    fetchPost();
  }, [id]);

  

  const handleUpdatePost = async () => {
    try {
      const updatedPost = {
        title,
        content,
        category: selectedCategory,
        image,
      };

      // Dispatch an action to update the post
      dispatch(updatePost(id, updatedPost));
      navigate("/dashboard")
    } catch (error) {
      setErrorMessage("Error updating post. Please check your input.");
      // Handle error
      console.error("Error updating post:", error);
    }
  };

  return (
    <>
      <HNav />
      <div className="art_card writeCard">
        <div className="content blog_inside_content">
          <h2>Edit Post</h2>
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
          {/* Image URL input */}
          <div className="art_title">
            <input
              type="text"
              placeholder="Enter Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          {/* Title input */}
          <div className="art_title">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* Content input */}
          <div className="art_words">
            <textarea
              className="art_single_post"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          {/* Error or success messages */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          {/* Update button */}
          <button onClick={handleUpdatePost} className="artBtn">
            Update
          </button>
        </div>
      </div>
    </>
  );
  
};

export default UpdatePost;
