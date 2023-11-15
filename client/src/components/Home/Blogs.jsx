import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const Blogs = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    // Dispatch an action to fetch all posts when the component mounts
    dispatch(getPosts());
  }, [dispatch]);
  const slicePost =  posts.slice(0,3);
  // console.log(posts);
  return (
      <div className="art_cards">
      {slicePost && slicePost.map((post)=>{
        return(
            <div key={post._id} >
            <Blog post={post} />
            </div>
            )
        })}
      
      </div>
  );
};

export default Blogs;
