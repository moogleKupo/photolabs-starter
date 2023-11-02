import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // Handle adding a favorite photo
      // Update your state to indicate that a photo is favorited
      return {
        ...state,
        favPhotoIds: [...state.favPhotoIds, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      // Handle removing a favorite photo
      // Update your state to indicate that a photo is unfavorited
      return {
        ...state,
        favPhotoIds: state.favPhotoIds.filter(function (id) {
          return id !== action.payload.id;
        }),
      };
    case ACTIONS.SET_PHOTO_DATA:
      // Handle setting photo data
      // Update your state with the new photo data
      return {
        ...state,
        photoData: action.payload.data,
      };
    case ACTIONS.SET_TOPIC_DATA:
      // Handle setting topic data
      // Update your state with the new topic data
      return {
        ...state,
        topicData: action.payload.data,
      };
    case ACTIONS.SELECT_PHOTO:
      // Handle selecting a photo
      // Update your state to indicate the selected photo
      return {
        ...state,
        selectedPhoto: action.payload.photoId,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // Handle displaying photo details
      // Update your state to display photo details
      return {
        ...state,
        displayPhotoDetails: true,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

function useApplicationData() {
  const initialState = {
    favPhotoIds: [], // Array of favorite photo IDs
    selectedPhoto: null, // ID of the currently selected photo
    photoData: null, // Placeholder for photo data
    topicData: null, // Placeholder for topic data
    displayPhotoDetails: false, // Flag to display photo details
    // Add other state variables as needed
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function updateToFavPhotoIds(id) {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    // Handle favoriting a photo
  }

  function removeFromFavPhotoIds(id) {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    // Handle unfavoriting a photo
  }

  function setPhotoData(data) {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data } });
    // Handle setting photo data
  }

  function setTopicData(data) {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { data } });
    // Handle setting topic data
  }

  function selectPhoto(photoId) {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photoId } });
    // Handle selecting a photo
  }

  function displayPhotoDetails() {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
    // Handle displaying photo details
  }

  useEffect(() => {
    // Simulate fetching initial data from an API
    const fetchData = async () => {
      try {
        // Fetch data here and update state using setPhotoData, setTopicData, etc.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function to initialize the data
    fetchData();
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    removeFromFavPhotoIds,
    setPhotoData,
    setTopicData,
    selectPhoto,
    displayPhotoDetails,
  };
}

export default useApplicationData;
