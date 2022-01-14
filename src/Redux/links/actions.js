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
  console.log(Date.now(), "action");

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
  console.log(Date.now(), "thunk action");

  console.log("thunk action api call");
  return (dispatch) => {
    // async
    return axios
      .get("https://www.reddit.com/r/programming.json")
      .then((response) => {
        // https://restcountries.com/v3.1/region/europe
        // console.log("after api call");
        // console.log(response);
        // let links = response.data.map((info) => ({
        //   title: info.capital[0],
        //   url: info.population,
        // }));
        // console.log(links);

        // reddit call data processing
        let threads = response.data;
        let links = threads.data.children.map((link) => ({
          title: link.data.title,
          url: link.data.url,
        }));
        // start the sync request
        dispatch(loadLinkSuccessAction(links));
      })
      .catch((error) => {
        console.log("FAILURE ", error);
        dispatch(loadLinkFailureAction());
      });
  };
}

//"https://www.reddit.com/r/programming.json"
