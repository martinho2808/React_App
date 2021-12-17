import { ADD_STUDENT, DELETE_STUDENT } from "./actions";

const initialState = {
  students: ["ivan", "shandy", "kelvin"],
};

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        students: state.students.concat([action.payload]),
      };
    case DELETE_STUDENT:
      console.log(action.payload, " <<<<<< action, appears on users client ");
      // splice a new copy of the array

      return {
        students: state.students.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
}
