import React, { useCallback, useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "../components/PhotoList";
import TopNavigation from "../components/TopNavigationBar";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        navItems={props.navItems}
        favourites={props.favouritePhotos}
        selectTopic={props.selectTopic}
        viewFavourites={props.viewFavourites}
      />
      <PhotoList
        photoItems={props.photoItems}
        editFavourite={props.editFavourite}
        onClick={props.selectPic}
        favouritePhotos={props.favouritePhotos}
      />
    </div>
  );
};

export default HomeRoute;
