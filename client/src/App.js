import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";
import { setServers } from "dns";

function App() {
  const [error, setError] = useState(null);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <Route path="/Bubbles" render={props => authCheck(BubblePage, props)} />
      </div>
    </Router>
  );
}

function authCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  } else {
    alert(`You need a valid username and password to access.`);
    return <Redirect to="/" />;
  }
}

export default App;
