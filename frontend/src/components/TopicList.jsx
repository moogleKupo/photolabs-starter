
import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from '../mocks/topics';

const TopicList = ({ topicData, handleTopicSelect }) => {
  if (!topicData || topicData.length === 0) {
    return <div>No topics available</div>;
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topics) => (
        <TopicListItem
          key={topics.id}
          id={topics.id}
          title={topics.title}
          handleTopicSelect={handleTopicSelect}
        />
      ))}
    </div>
  );
};

export default TopicList;
