import React from "react";
import "./Login.css";
import Header from "../components/Header";
import OtpInput from "otp-input-react";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { register } from "../redux/reducers/authslice";
import { toast } from "react-toastify";
import { setotp } from "../redux/reducers/authslice";
import { auth } from "./firebase.config";
import logo from "../components/Assets/logo.png"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [data,setdata] = useState({
    name:"",
    Phone:""
  })

  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          'size': "invisible",
          'callback': (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }
  function onSignup(e) {
    e.preventDefault();
    setLoading(true);
    onCaptchVerify();
    const formatPh = '+' + data?.Phone;
    console.log(formatPh);

    const appVerifier = window.recaptchaVerifier;


    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        dispatch(register({data,navigate}))
        .then((res)=>{
          console.log(res);
          setShowOTP(true);
        })
        .catch((err) => {
          console.log(err);
        });
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user); 
        dispatch(setotp({data,navigate}));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handlePhoneChange = (Phone) => {
    setdata({ ...data, Phone });
  };

  console.log(data)

  // const submit = (e) =>{
  //   e.preventDefault();
  //   console.log(data.password);
  //   console.log(data.reset);
  //   if(data.password !== data.reset){
  //     toast.error("password not match !!")
  //     return;
  //   }
  //   dispatch(register({data,navigate}))
  // }

  return (
    <>
    <Header></Header>
    <div id="recaptcha-container"></div>
    {showOTP ? (
      <>
      <section className="flex  items-center justify-center h-screen">
        <div>
        <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <img src={logo} alt="" />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-black text-center"
                  // style={{border:"1px solid black"}}
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
               
                ></OtpInput>
                <button className="relative bottom-0" id="final-login" onClick={onOTPVerify}>{loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}Verify OTP</button>
                  </div>
                  </div>
          </section>
              </>
            ) : (
              <div className=" flex flex-col justify-center gap-4 rounded-lg p-4">
          <section id="login">
            <h2 style={{fontSize:"25px"}}>This is a <span>Login</span>  for account</h2>
            <p id="content">
            </p>
            <form action="">
              <label for="name">Name</label><br/>
              <input type="text" id="name"  value={data.name} onChange={handleChange} name="name" required /><br/>
              <label for="re-pwd">Phone Number</label><br/>
              <PhoneInput className="phone" country={"in"} value={data.Phone} onChange={handlePhoneChange} />
              {/* <button id="final-login" onClick={onSignup}>SignUp</button><br/> */}
              <button className="relative bottom-0" id="final-login" onClick={onSignup}>{loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}Log In</button>
              
            </form>
          </section>
          </div>
            )}
    </>
  );
}
