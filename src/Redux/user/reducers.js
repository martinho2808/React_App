import { USER_GET_SUCCESS, USER_GET_FAILURE } from "./actions";

const initialState = {
  user: [{ name: "Sam" }],
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_GET_SUCCESS:
      return { user: state.user.concat([...action.payload]) };

    case USER_GET_FAILURE:
      return state;
    default:
      return state;
  }
}
