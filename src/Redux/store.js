import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { linkReducer } from "./links/reducers";
import { peopleReducer } from "./people/reducers";
import { authReducer } from "./auth/reducers";
import { userReducer } from "./user/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  linkStore: linkReducer,
  peopleStore: peopleReducer,
  authStore: authReducer,
  userStore: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
