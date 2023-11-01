import React, { useState } from "react";
import PhotoFavButton from './PhotoFavButton';
import FavIcon from './FavIcon';
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile, onClick } = props;

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="photo-list__item" onClick={() => onClick(props)}>
      <div className="photo-list__fav-icon" onClick={handleFavClick}>
        <FavIcon selected={isFavorited} displayAlert={false} />
      </div>
      <img className="photo-list__image" src={imageSource} alt={username} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={username} />
        <div className="photo-list__user-info">
          <h2>{username}</h2>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

