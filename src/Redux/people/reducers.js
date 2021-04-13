import {
  ADD_PERSON,
  SPACE_PEOPLE_SUCCESS_ACTION,
  SPACE_PEOPLE_FAILURE_ACTION,
} from "./actions";

const initialState = {
  people: [
    { name: "Jasmine", age: 16 },
    { name: "Aladin", age: 18 },
    { name: "Jafar", age: 39 },
    { name: "Genie", age: 99999 },
  ],
};

export function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: state.people.concat([action.payload]),
      };
    case SPACE_PEOPLE_SUCCESS_ACTION:
      return {
        people: state.people.concat([...action.payload]),
      };
    case SPACE_PEOPLE_FAILURE_ACTION:
      return state;
    default:
      return state;
  }
}
