import axios from "axios";
// Action Constants

export const ADD_LINK = "ADD_LINK";
export const CLEAR_LINKS = "CLEAR_LINKS";
export const DELETE_LINK = "DELETE_LINK";

// Thunk Action Constants

export const LOAD_LINK_SUCCESS_ACTION = "LOAD_LINK_SUCCESS_ACTION";
export const LOAD_LINK_FAILURE_ACTION = "LOAD_LINK_FAILURE_ACTION";

// Action Creators

export function AddLink(link) {
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
  return (dispatch) => {
    return axios
      .get("https://www.reddit.com/r/programming.json")
      .then((response) => {
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
