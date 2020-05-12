import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import firebase from "firebase";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import recipeReducer from "./store/redcuers/recipes";
import ENV from "./env";

const rootReducer = combineReducers({
  recipes: recipeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = (store) => {
  return (next) => {
    return (action) => {
      // console.log("[Middleware] Dispatching", action);
      const result = next(action);
      // console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const firebaseConfig = {
  apiKey: ENV.googleFirebaseKey,
  projectId: "dishbishamy-8954a",
  databaseURL: "https://dishbishamy-8954a.firebaseio.com/",
};
firebase.initializeApp(firebaseConfig);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
