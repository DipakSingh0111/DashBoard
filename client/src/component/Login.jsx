import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [male, setMale] = useState(" ");
  const [female, setFemale] = useState(" ");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const getData = () => {
    console.log("");
  };

  const handleLogin = async () => {
    console.log("email, password", email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <input
        type="text"
        className="inputBox"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <select onChange={getData}>
        <option onChange={(e) => setMale(e.target.value)}>male</option>
        <option onChange={(e) => setFemale(e.target.value)}>Female</option>
      </select>
      <input
        type="password"
        className="inputBox"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button onClick={handleLogin} className="appButton" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
