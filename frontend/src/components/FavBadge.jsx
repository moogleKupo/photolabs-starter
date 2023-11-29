import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

// Nav bar favourites button
const FavBadge = ({ isFavPhotoExist, viewFavourites }) => {
  return (
    <div
      className="fav-badge"
      onClick={() => {
        viewFavourites();
      }}
    >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
