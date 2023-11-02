import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onClose, similarPhotos, userProfile }) => {
  console.log('Selected Photo Data', photo);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <div className="photo-details-modal__photo-container">
          <PhotoFavButton />
          <img className="photo-details-modal__image" src={photo.urls.full} alt={photo.description} />
        </div>
        <div className="photo-details-modal__info">
          <h3>{photo.description}</h3>
          <p>
            Location: {photo.location.city}, {photo.location.country}
          </p>
          {userProfile && (
            <div>
              <h3>User Profile:</h3>
              <p>Username: {userProfile.username}</p>
              <p>Name: {userProfile.name}</p>
            </div>
          )}
        </div>
      </div>
      <div className="photo-details-modal__similar-photos">
        <h3>Similar Photos</h3>
        <ul>
          {similarPhotos.map((similarPhoto) => (
            <li key={similarPhoto.id}>
              <img src={similarPhoto.urls.regular} alt={similarPhoto.description} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;


