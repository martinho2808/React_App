// ACTION Constant

export const ADD_PERSON = "ADD_PERSON";

// ACTION Creator (Object with type and payload)
export function AddPerson(person) {
  return {
    type: ADD_PERSON,
    payload: person,
  };
}
