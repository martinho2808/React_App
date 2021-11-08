import axios from "axios";
// Action Constants

export const ADD_LINK = "ADD_LINK";
export const CLEAR_LINKS = "CLEAR_LINKS";
export const DELETE_LINK = "DELETE_LINK";

// Thunk Action Constants

export const LOAD_LINK_SUCCESS_ACTION = "LOAD_LINK_SUCCESS_ACTION";
export const LOAD_LINK_FAILURE_ACTION = "LOAD_LINK_FAILURE_ACTION";

// Action Creators

export function ClearLinks() {
  return {
    type: CLEAR_LINKS,
  };
}
export function AddLink(link) {
  // action
  return {
    type: ADD_LINK,
    payload: link,
  };
}

export function DeleteLink(i) {
  console.log(i);
  return {
    type: DELETE_LINK,
    payload: i,
  };
}

// Thunk Action Creators

export function loadLinkSuccessAction(links) {
  return {
    type: LOAD_LINK_SUCCESS_ACTION,
    payload: links,
  };
}

export function loadLinkFailureAction() {
  return {
    type: LOAD_LINK_FAILURE_ACTION,
  };
}

// Thunk Action called in component

export function loadLinkThunk() {
  console.log("thunk action api call");
  return (dispatch) => {
    return axios
      .get("https://www.reddit.com/r/programming.json")
      .then((response) => {
        console.log("after api call");
        let threads = response.data;
        let links = threads.data.children.map((link) => ({
          title: link.data.title,
          url: link.data.url,
        }));
        dispatch(loadLinkSuccessAction(links));
      })
      .catch((error) => {
        console.log("FAILURE ", error);
        dispatch(loadLinkFailureAction());
      });
  };
}
