import React from "react";
import "./Login.css";
import Header from "../components/Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/reducers/authslice";
import { toast } from "react-toastify";
export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setdata] = useState({
    name:"",
    email:"",
    password:"",
    reset:""
  })

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data)

  const submit = (e) =>{
    e.preventDefault();
    console.log(data.password);
    console.log(data.reset);
    if(data.password !== data.reset){
      toast.error("password not match !!")
      return;
    }
    dispatch(register({data,navigate}))
  }

  return (
    <>
    <Header></Header>
    <section id="login">
      <h2>This is a <span>Signup</span>  for account</h2>
      <p id="content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nesciunt animi rerum, officia error et laboriosam suscipit provident quam sint accusamus vero.
      </p>
      <form action="">
        <label for="name">Name</label><br/>
        <input type="text" id="name"  value={data.name} onChange={handleChange} name="name" required /><br/>
        <label for="Email">Email</label><br/>
        <input type="email" id="Email" value={data.email} onChange={handleChange} name="email" required /><br/>
        <label for="pwd">Password</label><br/>
        <input type="password" id="pwd" value={data.password} onChange={handleChange} name="password" required /><br/>
        <label for="re-pwd">Retype Password</label><br/>
        <input type="password" id="re-pwd" value={data.reset} onChange={handleChange}  name="reset" required /><br/>
        <button id="final-login" onClick={submit}>SignUp</button><br/>
        <p id="no-account" >Already Have An Account? <a href="/login">Login</a></p>
      </form>
    </section>
    </>
  );
}
