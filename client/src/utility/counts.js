import axios from 'axios';

export const fetchPostCount = async (userId) => {
  try {
    const response = await axios.get(`https://avez-blog-2023-end.onrender.com/blogs/user/${userId}/postCount`);
    return response.data.totalPosts;
  } catch (error) {
    console.error("Error fetching post count:", error);
    return 0;
  }
};

export const fetchTotalLikes = async (userId) => {
  try {
    const response = await axios.get(`https://avez-blog-2023-end.onrender.com/blogs/user/${userId}/totalLikes`);
    return response.data.totalLikes;
  } catch (error) {
    console.error("Error fetching total likes:", error);
    return 0;
  }
};
