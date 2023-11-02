import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, onClose, similarPhotos }) => {
  console.log('Selected Photo Data', photo);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        <img className="photo-details-modal__image" src={photo.urls.full} alt={photo.description} />
        <div className="photo-details-modal__info">
          <h3>{photo.description}</h3>
          <p>
            Location: {photo.location.city}, {photo.location.country}
          </p>
          <h3>User: {photo.user.username}</h3>
          <p>Name: {photo.user.name}</p>
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

