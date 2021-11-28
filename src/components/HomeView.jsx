import React, { useState } from "react";
import "./styles/HomeView.scss";
import { texts } from "./consts";
import GalleryView from "./GalleryView";
import { FaSearch } from "react-icons/fa";
import images from "../mock-images";
import Modal from "./Modal";

const HomeView = () => {
  const [searchImg, setSearchImg] = useState("");
  const [imageFromState, setImageFromState] = useState("");

  const handleSearch = (e) => {
    setSearchImg(e.target.value);
  };
  // console.log(Object.keys(images));
  // // console.log(images);
  // console.log(Object.entries(images));
  const closeModalHandler = () => {
    setImageFromState("");
  };

  return (
    <div>
      {imageFromState && (
        <Modal
          imageFromState={imageFromState}
          setImageFromState={setImageFromState}
          closeModalHandler={closeModalHandler}
        />
      )}
      <div className="home-view-container">
        <h3 className="home-view-header">{texts.HOME_VIEW_HEADER}</h3>
        <div className="home-view-search">
          <FaSearch className="search-icons" size="20px" />
          <input
            className="search-input"
            placeholder="Search..."
            onChange={handleSearch}
          ></input>
        </div>
        <GalleryView
          images={Object.entries(images).filter(([key, value]) =>
            key.includes(searchImg)
          )}
          imageFromState={imageFromState}
          setImageFromState={setImageFromState}
        />
      </div>
    </div>
  );
};

export default HomeView;
