import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({ photo, onClose, similarPhotos }) => {
  console.log("Selected Photo Data", photo);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__photo-container">
          <PhotoFavButton />
          <img
            className="photo-details-modal__image"
            src={photo.urls.full}
            alt={photo.description}
          />
          <div className="photo-list__user-details">
            <img
              className="photo-list__user-profile"
              src={photo.user.profile}
              alt={photo.user.username}
            />
            <div className="photo-list__user-info">
              <h2>{photo.user.username}</h2>
              <p className="photo-list__user-location">
                {photo.location.city}, {photo.location.country}
              </p>
            </div>
          </div>
        </div>
        <div className="photo-details-modal__info">
          <h3>{photo.description}</h3>
        </div>
      </div>
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <ul>
          {similarPhotos.map((similarPhoto) => (
            <li key={similarPhoto.id}>
              <img
                src={similarPhoto.urls.regular}
                alt={similarPhoto.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
