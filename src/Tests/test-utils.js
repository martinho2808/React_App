// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
// Import your own reducer
import { authReducer } from "../Redux/auth/reducers";
import { userReducer } from "../Redux/user/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authStore: authReducer,
  userStore: userReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function render(
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
