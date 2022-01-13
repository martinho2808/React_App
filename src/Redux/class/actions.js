// Action constant => reducers
export const ADD_STUDENT = "ADD_STUDENT";

// Action creator => in my component
export function AddStudent(student) {
  console.log("Add student function");
  return {
    type: ADD_STUDENT,
    payload: student,
  };
}

export const DELETE_STUDENT = "DELETE_STUDENT";

export function DeleteStudent(index) {
  return {
    type: DELETE_STUDENT,
    payload: index,
  };
}

// Action Constant
export const CLEAR_STUDENTS = "CLEAR_STUDENT";

//Action Creator
export function ClearStudent() {
  // Action
  return {
    type: CLEAR_STUDENTS,
  };
}

// Action Constant
export const EDIT_STUDENT = "EDIT_STUDENT";

//Action Creator
export function EditStudent(index, student) {
  // Action
  return {
    type: EDIT_STUDENT,
    payload: { index, student },
  };
}
