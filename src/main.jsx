import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
// import thunk from 'redux-thunk';
import { mapValues } from "lodash-es";
import { createLogger } from "redux-logger";
import App from "./App";
import rootReducer from "./reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middlewareList = [
  //thunk,
  // logger,
];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
    stateTransformer: (state) =>
      // Not all the reducers are Immutable structures so have
      // to check if they are for each one.
      // This function could get very costly over time, but it's
      // super useful for debugging.
      mapValues(state, (reducer) => {
        if (reducer.toJS) {
          return reducer.toJS();
        }

        return reducer;
      }),
  });

  middlewareList = [...middlewareList, logger];
}

const enhancer = composeEnhancers(applyMiddleware(...middlewareList));

const store = createStore(rootReducer, enhancer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
