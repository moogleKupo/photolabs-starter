import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import PhotoListItem from "./PhotoListItem";
import sampleDataForPhotoList from "./PhotoListItem";
import PhotoFavButton from './PhotoFavButton';
import FavIcon from './FavIcon';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar />
      <div className="photos-section">
        <PhotoList photoItems={sampleDataForPhotoList} />
        <PhotoFavButton />
        <FavIcon />
      </div>
    </div>
  );
};

export default HomeRoute;
