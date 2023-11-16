import React, { useEffect, useState } from "react";
import axios from "axios";
import HNav from "../components/Home/HNav";
import { useDispatch } from "react-redux";
import { signin, signup } from "../actions/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Auth = () => {
const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    imageUrl: "",
    email: "",
    password: "",
    bio: "",
    category: "", // New category field in the form data
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get("https://avez-blog-2023-end.onrender.com/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(""); // Clear any previous errors when toggling form
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors on form submission

    try {
      if (isLogin) {
        await dispatch(signin(formData));
      } else {
        await dispatch(signup(formData));
      }
    } catch (error) {
      setError("Error: Something went wrong."); // Set error message
      console.error("Error:", error.message);
      console.error("Response Data:", error.response.data);
      toast.error('Error: Something went wrong.'); // Display error message
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <HNav />
      <main style={{ margin: "2rem" }}>
        <div className="space1"></div>
        <div className="loginSpace2">
          <div className="formContainer">
            <div className="formBox">
              <div className="heading">
                <h2>{isLogin ? "Login" : "Register"}</h2>
              </div>
              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <input
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    value={formData.fullName}
                  />
                )}
                {!isLogin && (
                  <input
                    type="text"
                    name="imageUrl"
                    onChange={handleChange}
                    placeholder="Image URL"
                    value={formData.imageUrl}
                  />
                )}
                {!isLogin && (
                  <div>
                    <label htmlFor="category">Select Category:</label>
                    <select
                      name="category"
                      onChange={handleChange}
                      value={formData.category}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  value={formData.email}
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                  value={formData.password}
                />
                {!isLogin && (
                  <textarea
                    name="bio"
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Your Bio"
                    value={formData.bio}
                  ></textarea>
                )}
                <button>{isLogin ? "Login" : "Register"}</button>
              </form>
              <button
                style={{
                  background: "transparent",
                  color: "black",
                  border: "none",
                  marginLeft: "0.4rem",
                  textDecoration: "underline",
                }}
                onClick={toggleForm}
              >
                {isLogin
                  ? "Don't have an account, Register"
                  : "Already have an account, Login"}
              </button>
            </div>
          </div>
        </div>
        <div className="space3"></div>
      </main>
    </>
    
  );
};

export default Auth;
