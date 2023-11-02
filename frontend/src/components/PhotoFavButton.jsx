import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ onFavClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleFavClick = () => {
    setIsLiked(!isLiked);
    onFavClick(isLiked); // Call the parent's function to handle favorites
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <FavIcon selected={isLiked} displayAlert={false} />
    </div>
  );
};

export default PhotoFavButton;



