import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import Comments from "./Comments";

const Comment = ({ blog }) => {
  console.log(blog);
  const blogId = blog._id;
  const [comments, setComments] = useState(blog?.comments);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalComment = `${user.result.fullName}:${comment}`;
    dispatch(commentPost(finalComment, blogId));
    setTimeout(() => {
        setComment("");
    }, 500);
    setTimeout(() => {
        window.location.reload();
    }, 1000);
  };

  const truncate = (title, start, end) => {
    const words = title.split(":");
    const truncatedTitle = words.slice(start, end).join(" ");
    return truncatedTitle;
  };

  return (
    <>
      <div className="comment_container">
        <div className="comment_here">
          <div className="comment_heading">
            <h3>Comment</h3>
          </div>
          <div className="comment_text">
            <form>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                cols="30"
                rows="10"
                placeholder="Leave a Comment"
              ></textarea>
              <input
                type="submit"
                className="artBtn"
                style={{
                  marginTop: "2rem",
                  marginBottom: "5px",
                  marginLeft: "0rem",
                }}
                onClick={handleSubmit}
                value="POST"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="commentSection">
        <h2>Comments</h2>
        {comments &&
          comments.map((comment) => {
            return (
              <div className="comment">
                <div className="userCommentInfo">
                  <div className="userName">
                    User : {truncate(comment[0], 0, 1)}
                  </div>
                </div>
                <div className="commentContent">
                  {truncate(comment[0], 1, 2)}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Comment;
