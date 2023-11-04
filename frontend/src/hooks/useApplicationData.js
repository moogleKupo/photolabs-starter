import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload,
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favPhotoIds: state.favPhotoIds.filter((id) => id !== action.payload.id),
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicData: action.payload.data,
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhoto: action.payload.photoId,
    };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return {
      ...state,
      displayPhotoDetails: true,
    };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  const initialState = {
    favPhotoIds: [], // Array of favorite photo IDs
    selectedPhoto: null, // ID of the currently selected photo
    photoData: [], // Placeholder for photo data
    topicData: [], // Placeholder for topic data
    displayPhotoDetails: false, // Flag to display photo details
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
  };

  const removeFromFavPhotoIds = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
  };

  const setPhotoData = (data) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
  };

  const setTopicData = (data) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
  };

  const selectPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photoId } });
  };

  const displayPhotoDetails = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };


  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
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
};

export default useApplicationData;
