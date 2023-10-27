import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleFavClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className={`photo-list__fav-icon ${
        isLiked
          ? "photo-list__fav-icon-active"
          : "photo-list__fav-icon-inactive"
      }`}
      onClick={handleFavClick}
    ></div>
  );
};

export default PhotoFavButton;
