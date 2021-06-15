import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import app from "./reducer";

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  app,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
