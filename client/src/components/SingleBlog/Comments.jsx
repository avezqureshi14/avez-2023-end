import React from "react";

const Comments = ({comments}) => {
  const truncate = (title,start,end) => {
    const words = title.split(":");
    const truncatedTitle = words.slice(start, end).join(" ");
    return truncatedTitle;
  };
  console.log(comments)
  return (
    <>
      <div className="commentSection">
        <h2>Comments</h2>
        {
          comments && comments.map((comment)=>{
            return(
              <div className="comment">
              <div className="userCommentInfo">
                <div className="userName">User : {truncate(comment[0],0,1)}</div>
              </div>
              <div className="commentContent">
              {truncate(comment[0],1,2)}
              </div>
            </div>
            )
          })
        }
    
      </div>
    </>
  );
};

export default Comments;
