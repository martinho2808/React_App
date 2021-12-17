import {
  ADD_PERSON,
  SPACE_PEOPLE_SUCCESS_ACTION,
  SPACE_PEOPLE_FAILURE_ACTION,
  CLEAR_PEOPLE,
} from "./actions";

// getting items into reduce straight from local host local storage --> synchronous
let storedPeople = JSON.parse(localStorage.getItem("People"));
console.log(typeof storedPeople);
console.log(storedPeople);

if (typeof storedPeople === "object" && storedPeople === null) {
  console.log("HERE");
  storedPeople = [
    { name: "Jasmine", age: 16 },
    { name: "Aladin", age: 18 },
    { name: "Jafar", age: 39 },
    { name: "Genie", age: 99999 },
  ];
}

const initialState = {
  people: [...storedPeople],
};

export function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: state.people.concat([action.payload]),
      };
    case CLEAR_PEOPLE:
      return {
        people: [],
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
