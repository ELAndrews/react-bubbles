import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App(props) {
  const [error, setError] = useState(null);
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <Router>
      <nav>
        <h1>Welcome to the Bubble App!</h1>
        <NavLink to="/">LogIn</NavLink>
        <NavLink to="/Bubbles">BUBBLES!!</NavLink>
        <button onClick={logout}>Log Out</button>
      </nav>
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
