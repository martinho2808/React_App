import { createStore, combineReducers, compose } from "redux";
import { linkReducer } from "./links/reducers";
import { peopleReducer } from "./people/reducers";

const rootReducer = combineReducers({
  link: linkReducer,
  people: peopleReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
