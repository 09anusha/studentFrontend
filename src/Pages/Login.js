import React, { useState } from "react";
import Layouts from "../Components/Layouts";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState();

  const handleSubmit = () => {
    const url = "https://studentbackend-acm7.onrender.com/students/login";
    const loginObj = { email };
    axios
      .post(url, loginObj)
      .then((res) => {
        alert(res.data);
      }) 
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layouts>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email ID</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" />
      </form>
    </Layouts>
  );
}

export default Login;
