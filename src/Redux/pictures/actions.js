// To get images and an API key goto https://unsplash.com/developers

import axios from "axios";

export const ADD_IMAGE_SUCCESS = "ADD_IMAGE_SUCCESS";

export const DELETE_IMAGE = "DELETE_IMAGE";

export function DeleteImage(i) {
  console.log("sending to reducer ");
  return {
    type: DELETE_IMAGE,
    payload: i,
  };
}

export function AddImageSuccessAction(image) {
  return {
    type: ADD_IMAGE_SUCCESS,
    payload: image,
  };
}

export function getImageThunk(params) {
  console.log(params);
  console.log(params.searched);
  return (dispatch) => {
    return axios
      .get(
        `https://api.unsplash.com/search/photos/?query=${params.searched}&client_id=${process.env.REACT_APP_UNSPLASHED_KEY}`
      )
      .then((response) => {
        let information = response.data.results;
        let firstImage = information[0].urls.regular;
        const image = {
          url: firstImage,
          title: params.title,
        };

        dispatch(AddImageSuccessAction(image));
      });
  };
}
