import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photoItems, handleFavClick, onClick }) => {
  return (
    <ul className="photo-list">
      {photoItems.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          username={photoData.user.username}
          imageSource={photoData.urls.regular}
          id={photoData.id}
          location={`${photoData.location.city}, ${photoData.location.country}`}
          profile={photoData.user.profile}
          handleFavClick={handleFavClick}
          onClick={(e) => onClick(e, photoData)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
