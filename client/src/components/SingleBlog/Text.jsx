import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { LikeOutlined, LikeFilled, BookOutlined, BookFilled } from '@ant-design/icons';
import { likePost } from "../../actions/posts";
import {toggleBookmark} from "../../actions/bookmark"
import { getTimeAgo } from "../../utility/time";
import {Button} from "antd"
import Author from "./Author";
import Comment from "./Comment";
import Comments from "./Comments";
import SocialMediaShareButtons from "../General/SocialMedia";
const Text = ({ blogData }) => {
  const userId = blogData.creator;
  const [author,setAuthorData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://avez-blog-2023-end.onrender.com//user/${userId}`);
        setAuthorData(response.data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchUserData();
  }, [userId]);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  // Convert the date string to a JavaScript Date object
  const date = blogData.createdAt;
  const formattedDate = getTimeAgo(date);
  const post = blogData;
  const Likes = () => {
    if (post.likes.length > 0) {
    return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
      ? (
        <>
          <LikeFilled style={{ fontSize: 'small' }} />&nbsp;
          {post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
        </>
      ) : (
        <>
          <LikeOutlined style={{ fontSize: 'small' }} />&nbsp;
          {post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
  }

  return (
    <>
      <LikeOutlined style={{ fontSize: 'small' }} />&nbsp;Like
    </>
  );
  };

  

  const Bookmarks = () => {
    const bookmarks = useSelector((state) => state.bookmarks);

    const existingBookmark = bookmarks?.find((bookmark) => bookmark.blogId === post._id);

    const handleBookmark = () => {
      dispatch(toggleBookmark(post._id));
    };

    return (
      <Button
        size="small"
        color="primary"
        disabled={!user?.result}
        style={{"height":"3rem","padding":"0px 31px","margin":"0rem","marginRight":"1rem"}}
        onClick={handleBookmark}
      >
        {existingBookmark ? <BookFilled style={{ fontSize: 'small' }} /> : <BookOutlined style={{ fontSize: 'small' }} />  } &nbsp; Bookmark
      </Button>
    );
  };
  
  return (
    <>
      <div className="article_container">
        <div className="art_cards">
          <div className="art_card">
            <div className="image">
              <img src={blogData.image} alt="" />
            </div>
            <div className="content blog_inside_content">
              <div
                className="art_details art_details_inside"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <div className="artTime">
                  <span>⏲️</span> {formattedDate}
                </div>
              </div>
              <div
                className="art_title"
                style={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                <h2>{blogData.title}</h2>
              </div>
              <div
                className="art_words"
                style={{ marginTop: "1rem", marginBottom: "2rem" }}
              >
                <p>{blogData.content}</p>
              </div>
            </div>
          </div>
        </div>
        <Button style={{"height":"3rem","padding":"0px 31px","margin":"0rem","marginRight":"1rem","border":"2px solid black"}} size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
          </Button>
          <SocialMediaShareButtons/>
        <Author author={author} />
        {
          user?.result?.fullName && (
            <Comment blog={blogData} />
          )
        }
        
      </div>
    </>
  );
};

export default Text;
