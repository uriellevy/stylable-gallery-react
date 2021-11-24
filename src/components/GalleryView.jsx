import React from "react";
// import images from "../mock-images";
import "./styles/GalleryView.scss";

const GalleryView = ({ images }) => {
  // console.log(images);
  return (
    <div className="gallery-view-container">
      {images.map((item) => {
        return item[1].map((img) => {
          return (
            <div className="gallery-view-item">
              <img src={img} className="gallery-view-image" />
            </div>
          );
        });
      })}
    </div>
  );
};

export default GalleryView;
