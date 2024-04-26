import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React-router-dom
import { BrowserRouter } from "react-router-dom";
// redux-toolkit
import { Provider } from "react-redux";
import { store } from "./redux/configStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
