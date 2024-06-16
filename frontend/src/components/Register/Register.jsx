import React,{useState} from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate()
  const [data,setData]=useState({
    username:"",
    password:""
  })

  const updatedata=(e)=>{
    const { name, value } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
    }
    const adddata=(e)=>{
      const { username, password }  = data;
      e.preventDefault()
      axios
      .post("http://localhost:5000/register", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Property Added");
        toast.success("Registered successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Something wrong");
      });
    }
  return (
    <div className="register">
        <ToastContainer />
        <h1>Create User</h1>
        <label htmlFor="username">Username*</label><br />
        <input type="text" placeholder='Username' name='username' id='username' onChange={updatedata} /><br />
        <label htmlFor="password">Password*</label><br />
        <input type="text" placeholder='Password' name='password' id='password' onChange={updatedata} /><br />
        <button onClick={adddata}>Create User</button><br />
        <span>Already a user? </span><Link className='register-link' to='/login'>Login</Link>
    </div>
  )
}

export default Register