import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { linkReducer } from "./links/reducers";
import { peopleReducer } from "./people/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  linkStore: linkReducer,
  peopleStore: peopleReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
