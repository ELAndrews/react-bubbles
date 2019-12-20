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
      <div className="container">
        <nav>
          <div className="mainLinks">
            <NavLink to="/" className="navLinks loginLink">
              Log In
            </NavLink>
            <NavLink to="/Bubbles" className="navLinks">
              BUBBLES!!
            </NavLink>
            <button onClick={logout} className="logoutLink">
              Log Out
            </button>
          </div>
          <h1>Welcome to the Bubble App!</h1>
        </nav>
        <div className="App">
          <Route exact path="/" render={props => <Login {...props} />} />
          <Route
            path="/Bubbles"
            render={props => authCheck(BubblePage, props)}
          />
        </div>
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
