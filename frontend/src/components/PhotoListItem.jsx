import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
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
