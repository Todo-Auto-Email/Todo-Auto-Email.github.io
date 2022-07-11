import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const axios = require("axios");

export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  function getAuth(data) {
    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: data,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://todo-auto-email.herokuapp.com/api/v1/user/auth",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  function getOTP(email, otp) {
    console.log(email, otp);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      otp: otp,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://todo-auto-email.herokuapp.com/api/v1/user/verify",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <h1>Login</h1>
      <label for="email">Enter your email:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <button onClick={() => getAuth(email)}>Get OTP</button>
      <br />
      <label for="otp">Enter the OTP received on Email:</label>
      <input
        id="otp"
        name="otp"
        type="number"
        onChange={(event) => setOtp(event.target.value)}
        value={otp}
      />
      <br />
      <button onClick={() => getOTP(email, otp)}>Submit</button>
      <NavLink to="/Admin">
        <button>Submit</button>
      </NavLink>
    </div>
  );
}
