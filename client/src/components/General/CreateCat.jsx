import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const CreateCat = () => {
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint to create a new category
      const response = await axios.post('https://avez-blog-2023-end.onrender.com/categories', {
        name: categoryName // Sending the category name in the request body
      });

      // Handle successful creation
      console.log('New category created:', response.data);
      navigate("/write")
      // You can add further logic or state updates upon successful creation
    } catch (error) {
      // Handle errors if any
      console.error('Error creating category:', error);
      // You might want to display an error message to the user
    }
  };

  return (
    <>
      <div className="formContainer catContainer">
        <div className="formBox">
          <div className="heading">
            <h2>Create New Category</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Category Name"
              value={categoryName}
              onChange={handleInputChange}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCat;
