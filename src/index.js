import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //its going to keep track of the store which is that global stayed in that allows us to store from anywhere inside the app
//u cant be there in parent or child component u can acces it anywhere
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
