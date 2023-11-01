import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import PhotoDetailsModal from './routes/PhotoDetailsModal'; // Import the modal component
import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';
import FavIcon from './components/FavIcon';
import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';
import TopNavigationBar from './components/TopNavigationBar';
import sampleDataForPhotoList from './mocks/photos';
import topicData from './mocks/topics';

const App = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false); // Add state to manage modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Store the selected photo

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

  const handleTopicSelect = (topicId) => {
    // Handle topic selection
  };

  const handleFavClick = (photoId) => {
    // Toggle the favorited state and update the favoritedPhotos state here
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter((id) => id !== photoId));
      console.log("Removed from favorites: ", photoId);
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
      console.log("Added to favorites: ", photoId);
    }
  };

  // Function to handle photo click and show the modal
  const handlePhotoClick = (e, photoData) => {
    setSelectedPhoto(photoData); // Store the selected photo
    setShowModal(true); // Set showModal to true to display the modal
  };

  return (
    <div className="App">
      <TopNavigationBar
        topicData={topicData}
        handleTopicSelect={handleTopicSelect}
        favoritedPhotos={favoritedPhotos}
      />
      <PhotoList
        photoItems={sampleDataForPhotoList}
        handleFavClick={handleFavClick}
        onClick={handlePhotoClick} // Pass the click handler to PhotoList
      />

      {/* Render the modal if showModal is true */}
      {showModal && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={() => setShowModal(false)} // Add a function to close the modal
        />
      )}
    </div>
  );
};

export default App;
