import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const updatedata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  // console.log(data);
  const adddata = (e) => {
    const { username, password } = data;
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        navigate("/");
        localStorage.setItem("token", res.data.token);
      })
      .catch((error) => {
        // console.log(error);
        // alert(error);
        toast.error("Something wrong")
      });
  };
  return (
    <div className="login">
      <h1>Signin</h1>
      <label htmlFor="username">Username*</label>
      <br />
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        onChange={updatedata}
      />
      <br />
      <label htmlFor="password">Password*</label>
      <br />
      <input
        type="text"
        name="password"
        id="password"
        placeholder="Password"
        onChange={updatedata}
      />
      <br />
      <button onClick={adddata}>Signin</button>
      <br />
      <span>Not a user ? </span>
      <Link to="/register" className="loginlink">
        Register user
      </Link>
      <ToastContainer />
    </div>
  );
}

export default Login;
