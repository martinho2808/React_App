import { createStore, combineReducers, compose } from "redux";
import { linkReducer } from "./links/reducers";
import { peopleReducer } from "./people/reducers";
import { studentReducer } from "./class/reducers";

const rootReducer = combineReducers({
  linkStore: linkReducer,
  peopleStore: peopleReducer,
  studentStore: studentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
