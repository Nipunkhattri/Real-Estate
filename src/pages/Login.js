import React from "react";
import "./Login.css";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authlogin } from "../redux/reducers/authslice";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setdata] = useState({
    Username:"",
    Password:""
  })

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  console.log(data);

  const loginButton =(e)=>{
    e.preventDefault();
    dispatch(authlogin({data,navigate}))
  }

  return (
    <>

    <Header></Header>
      <section id="login">
        <h2 style={{
          fontSize:"50px !important",
          
        }}>
          This is a <span>Login</span> for account
        </h2>
        <p id="content">
       
        </p>
        <form action="">
          <label for="name">Name</label>
          <br />
          <input type="text" id="name" value={data.Username} onChange={handleChange} name="Username" required />
          <br />
          <label for="pwd">Password</label>
          <br />
          <input type="password" id="pwd" value={data.Password} onChange={handleChange} name="Password" required />
          <br />
          <p>
            <a href="/E-Commerce/resetPw.html" id="forgot-password">
              Forget Password?
            </a>
          </p>
          <br />
          <button id="final-login" onClick={loginButton}>Login</button>
          <br />
          <p id="no-account">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
          <p id="no-account">
            Login using  <a href="/otplogin">Otp</a>
          </p>
        </form>
      </section>
    </>
  );
}
