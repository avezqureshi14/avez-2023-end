import React from "react";

const Feature = () => {
  return (
    <>
      <div class="recommendedBlogContainer ">
        <div class="recommendations featureButton">
          <div class="recCol">
            <div
                   class="recommendedBlog"
            >
              <div style={{ border: "2px dotted black;" }}  class="recommendedblogContent">
                <h2>
                  {" "}
                  <a href="#community"> Meet People with Similar Interest</a>
                </h2>
              </div>
            </div>
            <div class="recommendedBlog">
              <div class="recommendedblogContent">
                <h2>Read Blogs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
