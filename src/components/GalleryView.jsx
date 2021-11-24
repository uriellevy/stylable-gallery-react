import React from "react";
import images from "../mock-images";
import "./styles/GalleryView.scss";

const GalleryView = () => {
  // console.log(images);
  return (
    <div className="gallery-view-container">
      {Object.values(images).map((category) => {
        return category.map((image) => {
          // console.log(image);
          return (
            <div className="gallery-view-item">
              <img src={image} className="gallery-view-image" />
            </div>
          );
        });
      })}
    </div>
  );
};

export default GalleryView;
