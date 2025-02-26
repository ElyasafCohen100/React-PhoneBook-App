// =========== Main entry point of the React App =========== //
import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import ReduxApp from "./components/reduxApp";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  </React.StrictMode>
);
