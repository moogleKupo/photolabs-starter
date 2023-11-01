import React, { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from './components/PhotoList';
import PhotoFavButton from './components/PhotoFavButton';
import FavIcon from './components/FavIcon';
import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';
import TopNavigationBar from './components/TopNavigationBar';
import sampleDataForPhotoList from './mocks/photos';
import topicData from './mocks/topics';

/*const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];
*/

const App = () => {
  const topicData = [
    {
      id: "1",
      title: "Nature",
    },
    {
      id: "2",
      title: "Travel",
    },
    {
      id: "3",
      title: "People",
    },
  ];

  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicSelect = (topicId) => {

  };
  return (
    <div className="App">
      <TopNavigationBar topicData={topicData} handleTopicSelect={handleTopicSelect} />
      <PhotoList photoItems={sampleDataForPhotoList}/>
      <PhotoFavButton />
      <FavIcon />
    </div>
  );
};

export default App;

