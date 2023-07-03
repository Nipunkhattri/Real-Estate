import React from "react";
import "./Login.css";
import Header from "../components/Header";
export default function Login() {
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nesciunt
          animi rerum, officia error et laboriosam suscipit provident quam sint
          accusamus vero.
        </p>
        <form action="">
          <label for="name">Name</label>
          <br />
          <input type="text" id="name" name="username" required />
          <br />
          <label for="pwd">Password</label>
          <br />
          <input type="password" id="pwd" name="pwd" required />
          <br />
          <p>
            <a href="/E-Commerce/resetPw.html" id="forgot-password">
              Forget Password?
            </a>
          </p>
          <br />
          <button id="final-login">Login</button>
          <br />
          <p id="no-account">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </form>
      </section>
    </>
  );
}
