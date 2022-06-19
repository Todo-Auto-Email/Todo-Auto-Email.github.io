import React from "react";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <label for="email">Enter your email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label for="otp">Enter the OTP received on Email:</label>
      <input type="number" name="otp" />
      <br />
      <NavLink to="/Admin">
        <button>Submit</button>
      </NavLink>
    </div>
  );
}
