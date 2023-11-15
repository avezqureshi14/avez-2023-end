import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";
const SwiperCreator = () => {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    // Fetch the list of categories from the API when the component mounts.
    async function fetchCreators() {
      try {
        const response = await axios.get("https://avez-blog-2023-end.onrender.com//user");
        setCreators(response.data);
      } catch (error) {
        // Handle error
        console.error("Error fetching categories:", error);
      }
    }
    fetchCreators();
  }, []);
  const truncate = (title) => {
    const words = title.split("@");
    const truncatedTitle = words.slice(0, 1).join(" ");
    return truncatedTitle;
  };
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={50}
        scrollbar={{ draggable: true }}
        slidesPerView={4}
      >
        {creators &&
          creators.map((creator) => {
            return (
              <SwiperSlide>
                <div class="creator">
                  <div class="creatorImage">
                    <img src={creator.imageUrl} />
                  </div>
                  <div class="creatorName zero-line-ellipsis">
                    {truncate(creator.email)}
                  </div>
                  <p class="three-line-ellipsis">{creator.bio}</p>
                  <Link to={`/profile/${creator._id}`} target="_blank">
                    <div class="creatorInfo">
                      <button>View Creator</button>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SwiperCreator;
