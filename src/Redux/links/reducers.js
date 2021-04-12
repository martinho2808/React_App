import {
  ADD_LINK,
  CLEAR_LINKS,
  DELETE_LINK,
  LOAD_LINK_SUCCESS_ACTION,
  LOAD_LINK_FAILURE_ACTION,
} from "./actions";

const initialState = {
  links: [
    { title: "Google", url: "https://www.google.com" },
    { title: "Yahoo", url: "https://www.yahoo.com" },
    { title: "Bing", url: "https://www.bing.com" },
    { title: "Duckduckgo", url: "https://www.duckduckgo.com" },
  ],
};

export function linkReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LINK:
      return {
        links: state.links.concat([action.payload]),
      };
    case CLEAR_LINKS:
      return {
        links: [],
      };
    case DELETE_LINK:
      return {
        links: state.links.filter((link, index) => index !== action.payload),
      };
    case LOAD_LINK_SUCCESS_ACTION:
      return {
        links: state.links.concat([...action.payload]),
      };
    case LOAD_LINK_FAILURE_ACTION:
      return {
        state,
      };
    default:
      return state;
  }
}
