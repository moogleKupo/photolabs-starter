import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topicData, photoData, state, handleTopicSelect, handleSearch }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} handleTopicSelect={handleTopicSelect} /> {/* Pass topicData and handleTopicSelect as props */}
      <FavBadge />
    </div>
  );
};

export default TopNavigation;