import React from 'react'
import { Link } from 'react-router-dom'

const Author = ({author}) => {
  return (
    <>
    <div className="author_container">
                    <div className="author_detail">

                
                    <div className="author_image">
                    <Link to={`/profile/${author._id}`} >
                    <img src={author.imageUrl}
                    alt={author.fullName}/>
                    </Link>
                    </div>
                        <div className="author_content ">
                            <div className="author_name">
                                <h2>{author.fullName}</h2>
                            </div>
                            <div className="author_about">
                                {author.bio}
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Author