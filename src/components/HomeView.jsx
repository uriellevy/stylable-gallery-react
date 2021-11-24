import React from "react";
import "./styles/HomeView.scss";
import { texts } from "./consts";
import GalleryView from "./GalleryView";
import { FaSearch } from "react-icons/fa";

const HomeView = () => {
  return (
    <div className="home-view-container">
      <h3 className="home-view-header">{texts.HOME_VIEW_HEADER}</h3>
      <div className="home-view-search">
        <FaSearch className="search-icons" size="20px" />
        <input className="search-input" placeholder="Search..."></input>
      </div>

      <GalleryView />
    </div>
  );
};

export default HomeView;
