import React, { useReducer, useEffect } from "react";

const initialState = {
  photo: null,
  isFav: false,
  favPhotos: [],
  photoData: [],
  topicData: [],
  searchInput: "",
};

const actionTypes = {
  openModal: "openModal",
  closeModal: "closeModal",
  setPhotoData: "setPhotoData",
  setTopicData: "setTopicData",
  addFavPhoto: "addFavPhoto",
  removeFavPhoto: "removeFavPhoto",
  setSearchInput: "setSearchInput",
};

const appReducer = (state, action) => {
  switch (action.type) {
  case "openModal":
    return { ...state, photo: action.payload };
  case "closeModal":
    return { ...state, photo: null };
  case "setPhotoData":
    return { ...state, photoData: action.payload };
  case "setTopicData":
    return { ...state, topicData: action.payload };
  case "addFavPhoto":
    return { ...state, favPhotos: [...state.favPhotos, action.payload] };
  case "removeFavPhoto":
    return { ...state, favPhotos: action.payload };
  case "setSearchInput":
    return { ...state, searchInput: action.payload };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    fetch("/api/photos", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((photo) =>
        dispatch({ type: actionTypes.setPhotoData, payload: photo })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/topics`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((topic) =>
        dispatch({ type: actionTypes.setTopicData, payload: topic })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const searchPhotos = state.photoData.filter((photo) =>
      photo.location.city
        .toLowerCase()
        .includes(state.searchInput.toLowerCase())
    );
    dispatch({ type: actionTypes.setPhotoData, payload: searchPhotos });
  }, [state.searchInput]);

  const openModal = (photo) => {
    dispatch({ type: actionTypes.openModal, payload: photo });
  };
  const closeModal = () => {
    dispatch({ type: actionTypes.closeModal });
  };
  const handleFav = (photoId) => {
    if (state.favPhotos.includes(photoId)) {
      const favPhotosWithoutSelected = [...state.favPhotos].filter(
        (photo) => photo !== photoId
      );
      dispatch({
        type: actionTypes.removeFavPhoto,
        payload: favPhotosWithoutSelected,
      });
    } else {
      dispatch({ type: actionTypes.addFavPhoto, payload: photoId });
    }
  };
  const handleTopicSelect = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.setPhotoData, payload: data })
      );
  };
  const handleSearch = (searchData) => {
    dispatch({ type: actionTypes.setSearchInput, payload: searchData });
  };

  return {
    state,
    openModal,
    closeModal,
    handleFav,
    handleTopicSelect,
    handleSearch,
  };
};

export default useApplicationData;
