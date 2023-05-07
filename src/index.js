import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "redux/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";

import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   // <React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
   // </React.StrictMode>
);
