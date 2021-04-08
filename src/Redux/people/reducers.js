import { ADD_PERSON } from "./actions";

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
    default:
      return state;
  }
}
