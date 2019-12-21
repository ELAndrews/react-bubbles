import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Route path="/" render={props => <App {...props} />} />
  </Router>,
  rootElement
);
