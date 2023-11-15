import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../actions/posts";
import Text from "../components/SingleBlog/Text";
import ASide from "../components/SingleBlog/ASide";
import HNav from "../components/Home/HNav";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blogData = useSelector((state) =>
    state.posts.find((post) => post._id === id)
  );

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  if (!blogData) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <HNav />
      <main>
        <div className="space1"></div>
        <div className="articleSpace2">
          <Text blogData={blogData} />
          <ASide blogData={blogData} />
        </div>
        <div className="space2"></div>
      </main>
    </>
  );
};

export default SingleBlog;
