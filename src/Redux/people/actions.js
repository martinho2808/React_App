// Constants

import axios from "axios";

export const ADD_PERSON = "ADD_PERSON";

export const CLEAR_PEOPLE = "CLEAR_PEOPLE";

// Thunk Action Constants
export const SPACE_PEOPLE_SUCCESS_ACTION = "SPACE_PEOPLE_SUCCESS_ACTION";
export const SPACE_PEOPLE_FAILURE_ACTION = "SPACE_PEOPLE_FAILURE_ACTION";

// ACTION CREATOR (Object with type and payload)
export function AddPerson(person) {
  return {
    type: ADD_PERSON,
    payload: person,
  };
}

export function ClearPeople() {
  return {
    type: CLEAR_PEOPLE,
  };
}

// THUNK ACTION CREATOR
export function spacePeopleSuccessAction(people) {
  return {
    type: SPACE_PEOPLE_SUCCESS_ACTION,
    payload: people,
  };
}

export function spacePeopleFailureAction() {
  return {
    type: SPACE_PEOPLE_FAILURE_ACTION,
  };
}

// Thunk action called in component
export function loadSpacePeopleThunk() {
  console.log("Thunk fired!");
  return (dispatch) => {
    return axios
      .get("http://api.open-notify.org/astros.json")
      .then((response) => {
        console.log("Axios retrieved!");

        let information = response.data;
        let people = information.people.map((person) => ({
          name: person.name,
          age: person.craft,
        }));
        dispatch(spacePeopleSuccessAction(people));
        console.log("Action dispatched");
      })
      .catch((error) => {
        console.log("Failure", error);
        dispatch(spacePeopleFailureAction());
      });
  };
}
