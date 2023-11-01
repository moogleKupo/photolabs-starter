import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavorites }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={hasFavorites} />
      {hasFavorites && (
        <div className='fav-badge__count'>
          <span>{hasFavorites}</span>
        </div>
      )}
    </div>
  );
};

export default FavBadge;
