import React from "react";
import "./Login.css";
import { Card } from "@material-ui/core";
function Login() {
  const submitHandler = () => {
    console.log("pressed login");
  };

  return (
    <form className="Login">
      <Card className="Login-Card">
        <h2>Welcome to Flyzy!</h2>
        <label>
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button type="submit" onSubmit={submitHandler}>
          Login
        </button>
      </Card>
    </form>
  );
}

export default Login;
