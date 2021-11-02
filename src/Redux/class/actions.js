// Action constant => reducers
export const ADD_STUDENT = "ADD_STUDENT";

// Action creator => in my component
export function AddStudent(student) {
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
