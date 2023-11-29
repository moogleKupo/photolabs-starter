import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ item, editFavourite, favouritePhotos, onClick }) => {
  const changeFavourites = (adding) => {
    editFavourite(item, adding);
  };

  return (
    <section className="photo-list__item">
      <PhotoFavButton
        changeFavs={changeFavourites}
        parentItem={item}
        favouritePhotos={favouritePhotos}
      />
      <img
        className="photo-list__image"
        src={item.urls.regular}
        onClick={() => onClick(item)}
      ></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={item.user.profile}></img>
        <div className="photo-list__user-info">
          <span>{item.user.name}</span>
          <br></br>
          <span className="photo-list__user-location">
            {item.location.city}, {item.location.country}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
