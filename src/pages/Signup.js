import React from "react";
import "./Login.css";
import Header from "../components/Header";
export default function Signup() {
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
        <input type="text" id="name" name="username" required /><br/>
        <label for="Email">Email</label><br/>
        <input type="email" id="Email" name="Email" required /><br/>
        <label for="pwd">Password</label><br/>
        <input type="password" id="pwd" name="pwd" required /><br/>
        <label for="re-pwd">Retype Password</label><br/>
        <input type="password" id="re-pwd" name="re-pwd" required /><br/>
        
        <button id="final-login">SignUp</button><br/>
        <p id="no-account" >Already Have An Account? <a href="/login">Login</a></p>
      </form>
    </section>
    </>
  );
}
