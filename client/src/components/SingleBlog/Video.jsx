import React, { useEffect, useState } from "react";
import axios from "axios";
const Video = ({ blogData }) => {
  const [videos, setVideos] = useState([]);
  const options = {
    method: "GET",
    url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
    params: { q: `${blogData.title}` },
    headers: {
      "X-RapidAPI-Key": "b51b23820amshf9bcf39e47d7b4dp1732f4jsnc849a2cd8462",
      "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
    },
  };
  const options3 ={

}
  useEffect(() => {
    axios
      .request(options3)
      .then((response) => {
        setVideos(response.data.videos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blogData]);
  if (!videos) {
    console.log("Loading...");
  } else {
    console.log(videos);
  }
  return (
    <div className="blog_Category">
      <div className="heading">
        <h3>Recommended Video</h3>
      </div>
      {!videos ? (
        <h1>Loading</h1>
      ) : (
        videos.slice(0, 1).map((video) => (
          <div className="BlogVideo" key={video.id}>
            <iframe
              width="1013"
              height="570"
              src={`https://www.youtube.com/embed/${video.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

          </div>
        ))
      )}
    </div>
  );
};

export default Video;
