import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { setotp } from "../redux/reducers/authslice";
import Header from "../components/Header";
import "./Login.css";
import logo from "../components/Assets/logo.png"

const OtpLogin = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [user1, setUser1] = useState({
    phone:""
  });
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
    
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCred = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser1({ ...user1, [name]: value });
  };
  const handlePhoneChange = (phone) => {
    setUser1({ ...user1, phone });
  };

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
  console.log(user1)

  function onSignup() {
    setLoading(true);
    onCaptchVerify();
    const formatPh = '+' + user1?.phone;
    console.log(formatPh);

    const appVerifier = window.recaptchaVerifier;


    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
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
        console.log(user1) 
        dispatch(setotp({user1,navigate}));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <>
       <Header></Header>
    <section className="flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? <></>: (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            {showOTP ? (
              <>
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
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-1 p-4 rounded-full">
                <img src={logo} alt="" />

                </div>
                <label
                  htmlFor=""
                  className="relative  font-bold text-xl text-black text-center bottom-8"
                >
                  Verify your phone number
                </label>
                <PhoneInput className="relative bottom-8" country={"in"} value={user1.phone} onChange={handlePhoneChange} />
                
                <button className="relative bottom-8" id="final-login" onClick={onSignup}>{loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}Send OTP Via Message</button><br/>
              </>
            )}
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default OtpLogin;
