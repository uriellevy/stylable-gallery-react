import React from "react";
import "./styles/GalleryView.scss";

const GalleryView = ({ images, setImageFromState }) => {
  // console.log(images);

  return (
    <div className="gallery-view-container">
      {images.map((item) => {
        return item[1].map((img, index) => {
          return (
            <div className="gallery-view-item" key={index}>
              <img
                src={img}
                className="gallery-view-image"
                onClick={() => setImageFromState(img)}
              />
            </div>
          );
        });
      })}
    </div>
  );
};

export default GalleryView;
