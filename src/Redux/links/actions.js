// Action Creators

export const ADD_LINK = "ADD_LINK";
export const CLEAR_LINKS = "CLEAR_LINKS";

export const DELETE_LINK = "DELETE_LINK";

// Actions

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
