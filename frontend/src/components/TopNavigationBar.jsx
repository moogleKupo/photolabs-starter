import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

// Nav bar for top of page
const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList items={props.navItems} selectTopic={props.selectTopic} />
      <FavBadge
        isFavPhotoExist={props.favourites.length > 0 ? true : false}
        viewFavourites={props.viewFavourites}
      />
    </div>
  );
};

export default TopNavigation;
