/* eslint-disable func-style */
import React, { useState, useEffect } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    props.changeFavs(!liked);
  };

  useEffect(() => {
    for (const pic of props.favouritePhotos) {
      if (pic.id === props.parentItem.id) {
        !liked && setLiked(true);
        return;
      }
    }

    setLiked(false);
  }, [props.favouritePhotos]);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon displayAlert={false} selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
