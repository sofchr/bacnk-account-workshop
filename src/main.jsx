import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./redux/accountSlice";
import App from "./App";

// Create the Redux store
const store = configureStore({
  // ***TODO***
  // Set the accountReducer as the reducer for the 'account' state
});

// Render the App component inside the Provider component
ReactDOM
  .render
  // ***TODO***
  ();
