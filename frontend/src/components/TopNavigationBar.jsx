import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/FavBadge.scss';

const TopNavigationBar = ({ topicData, handleTopicSelect, favoritedPhotos }) => {
  const hasFavorites = favoritedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} handleTopicSelect={handleTopicSelect} />
      <FavBadge hasFavorites={hasFavorites} />
    </div>
  );
};

export default TopNavigationBar;


