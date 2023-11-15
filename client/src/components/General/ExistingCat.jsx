import axios from 'axios';
import React, { useEffect, useState } from 'react'
const ExistingCat = () => {
  const [categories, setCategories] = useState([]);

    useEffect(() => {
    // Fetch the list of categories from the API when the component mounts.
    async function fetchCategories() {
      try {
        const response = await axios.get("https://avez-blog-2023-end.onrender.com//categories");
        setCategories(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);
  return (
    <>
    <div className="blogPostsContainer">
                <div className="blog_Category">
                    <div className="heading">
                        <h3>Existing Categories</h3>
                    </div>
                    <div className="recent_Content_Container">
                        <div className="recent_content catContent">
                        {categories.map((category)=>{
                            return(
                              <div  key={category._id} >
                              <div className="topic catTopic">
                              {category.name}
                              </div>
                              </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ExistingCat