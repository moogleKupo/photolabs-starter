import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.items.map((item) => {
        return (
          <TopicListItem
            key={item.id}
            id={item.id}
            slug={item.slug}
            title={item.title}
            selectTopic={props.selectTopic}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
