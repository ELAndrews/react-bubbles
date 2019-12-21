import React, { useRef } from "react";
import axios from "axios";

const Login = props => {
  // make a post request to retrieve a token from the api [x]
  // when you have handled the token, navigate to the BubblePage route [x]

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/Bubbles");
      })
      .catch(err => {
        props.setError(err);
      });
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <p> Username:</p>
          <input type="text" ref={usernameRef} />
          <p>Password:</p>
          <input type="password" ref={passwordRef} />
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
