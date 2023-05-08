import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import { store } from "redux/store.js";

import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter basename="/tweets_card">
      <React.StrictMode>
         <Provider store={store}>
            <App />
         </Provider>
      </React.StrictMode>
   </BrowserRouter>
);
