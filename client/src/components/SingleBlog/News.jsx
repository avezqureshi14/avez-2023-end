import axios from "axios";
import React, { useEffect, useState } from "react";

const News = ({ blogData }) => {
  const [news, setNews] = useState([]);
  const options1 = {
    method: "GET",
    url: "https://real-time-news-data.p.rapidapi.com/search",
    params: {
      query: `${blogData.title}`,
      country: "US",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "b51b23820amshf9bcf39e47d7b4dp1732f4jsnc849a2cd8462",
      "X-RapidAPI-Host": "real-time-news-data.p.rapidapi.com",
    },
  };
  const options2 = {
  method: 'GET',
  url: 'https://youtube-v2.p.rapidapi.com/video/details',
  params: {
    video_id: 'PuQFESk0BrA'
  },
  headers: {
    'X-RapidAPI-Key': 'b51b23820amshf9bcf39e47d7b4dp1732f4jsnc849a2cd8462',
    'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
  }
};
const options3 ={

}
  useEffect(() => {
    axios
      .request(options3)
      .then((response) => {
        setNews(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [blogData]);
  if (!news) {
    console.log("Loading...");
  } else {
    console.log(news);
  }
  return (
    <div>
      <div style={{ marginTop: "2rem" }} className="blog_Category">
        <div className="heading">
          <h3>Recommended News</h3>
        </div>
        {news &&
          news.slice(3, 4).map((newItem) => (
            <a href={newItem.link} target="__blank" key={newItem.id}>
            <div className="BlogImage">
            <img src={newItem.photo_url} alt={newItem.title} />
            </div>
            <h6 className="newTitle" >{newItem.title}</h6>
            </a>
          ))}
      </div>
    </div>
  );
};

export default News;
