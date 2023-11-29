/* eslint-disable linebreak-style */
/* eslint-disable func-style */
/* eslint-disable linebreak-style */
import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
};

function reducer(state, action) {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favouritePhotos: [...state.favouritePhotos, action.item],
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favouritePhotos: state.favouritePhotos.filter(
        (item) => item.id !== action.item.id
      ),
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      clickedPic: action.item,
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.item,
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicData: action.item,
    };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favouritePhotos: [],
    clickedPic: null,
    photoData: [],
    topicData: [],
    selectedTopic: null,
  });

  //Add a single photo to the favourites
  const updateToFavPhotoIds = (photoItem, adding) => {
    if (adding) {
      dispatch({ type: "FAV_PHOTO_ADDED", item: photoItem });
    } else {
      dispatch({ type: "FAV_PHOTO_REMOVED", item: photoItem });
    }
  };

  //Set a photo to be viewed in modal
  const setPhotoSelected = (photoItem) => {
    dispatch({ type: "SELECT_PHOTO", item: photoItem });
  };

  //Show only the photos belonging to a particular topic
  const selectTopic = (topicSlug) => {
    fetch(`/api/topics/photos/${topicSlug}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", item: data }));
  };

  //Show only favourited items
  const viewFavourites = () => {
    dispatch({ type: "SET_PHOTO_DATA", item: state.favouritePhotos });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", item: data }));
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_TOPIC_DATA", item: data }));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    selectTopic,
    viewFavourites,
  };
};

export default useApplicationData;
