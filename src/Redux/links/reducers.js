import {
  ADD_LINK,
  CLEAR_LINKS,
  DELETE_LINK,
  LOAD_LINK_SUCCESS_ACTION,
  LOAD_LINK_FAILURE_ACTION,
} from "./actions";

// Loads data into the application synchronously. So you cannot call an API in the reducer to make initial state
// What we can do is make a pattern so it states that the data is loading

// OR we can call an action in out index.js to populate the store before the component has managed to load.

const initialState = {
  links: [
    { title: "Google", url: "https://www.google.com" },
    { title: "Yahoo", url: "https://www.yahoo.com" },
    { title: "Bing", url: "https://www.bing.com" },
    { title: "Duckduckgo", url: "https://www.duckduckgo.com" },
  ],
  loading: true,
};

export function linkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.payload]),
        loading: false,
      };
    case CLEAR_LINKS:
      return {
        links: [],
        loading: false,
      };
    case DELETE_LINK:
      return {
        links: state.links.filter((link, index) => index !== action.payload),
        loading: false,
      };
    case LOAD_LINK_SUCCESS_ACTION:
      return {
        links: state.links.concat([...action.payload]),
        loading: false,
      };
    case LOAD_LINK_FAILURE_ACTION:
      return {
        state,
      };
    default:
      return state;
  }
}
