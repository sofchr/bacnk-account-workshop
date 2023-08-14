import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./redux/accountSlice";
import App from "./App";

// Create the Redux store
const store = configureStore({
  // Set the accountReducer as the reducer for the 'account' state
  reducer: {
    account: accountReducer,
  },
});

// Render the App component inside the Provider component
ReactDOM.createRoot(document.getElementById("root")).render(
  //Provider component needs to be linked to the store
  <Provider store={store}>
    <App />
  </Provider>
);
