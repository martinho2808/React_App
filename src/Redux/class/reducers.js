import {
  ADD_STUDENT,
  DELETE_STUDENT,
  CLEAR_STUDENTS,
  EDIT_STUDENT,
} from "./actions";

const initialState = {
  students: ["ivan", "shandy", "kelvin"],
};

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      console.log("Add student reducer ");
      console.log("from reducer action.payload:", action.payload);
      return {
        students: state.students.concat([action.payload]),
      };
    case DELETE_STUDENT:
      console.log(action.payload, " <<<<<< action, appears on users client ");
      // splice a new copy of the array

      return {
        students: state.students.filter((_, i) => i !== action.payload),
      };
    case EDIT_STUDENT:
      console.log(action.payload);
      let studentArr = state.students.slice();
      studentArr[action.payload.index] = action.payload.student;
      console.log(studentArr);
      console.log(state.students);
      return {
        students: studentArr,
      };
    case CLEAR_STUDENTS:
      return {
        students: [],
      };
    default:
      return state;
  }
}
