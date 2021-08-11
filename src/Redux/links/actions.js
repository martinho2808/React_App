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
        let links;
        if (Array.isArray(response.data.data.children)) {
          // Real implementation
          let threads = response.data;
          links = threads.data.children.map((link) => ({
            title: link.data.title,
            url: link.data.url,
          }));
          dispatch(loadLinkSuccessAction(links));
        } else {
          console.log("real here");
          console.log("test here?");
          let info = JSON.parse(response.request.response);
          // Testing implementation
          links = info.data.data.children.map((link) => ({
            title: link.title,
            url: link.url,
          }));
          dispatch(loadLinkSuccessAction(links));
        }
      })
      .catch((error) => {
        console.log("FAILURE ", error);
        dispatch(loadLinkFailureAction());
      });
  };
}
