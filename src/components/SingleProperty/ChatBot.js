import React, { useEffect } from "react";
import "./Chat.css";
import { useState } from "react";
import { auth } from "../../pages/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setotp } from "../../redux/reducers/authslice";
import { useRef } from "react";
import axios from "axios";
import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import CardsSection from "../Home/CardsSection";
import ChatCard from "../Home/ChatCard";

const ChatBot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputvalue, setInputValue] = useState("");
  const step = useRef(1);
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setotp1] = useState(null);
  const [name, setname] = useState(null);
  const [user1, setUser1] = useState({
    phone: "",
    name: "",
  });
  const [data,setdata] =useState('')
  const [Category, setCategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [query, setQuery] = useState({ category: "", subcategory: "" });

  useEffect(() => {
    if (Category !== "" || subCategory !== "") {
      setQuery({
        category: Category,
        subcategory: subCategory,
      });
    }
  }, [Category, subCategory]);

  const makeApiCall = async () => {
    try {
      console.log("api call");
        const response = await axios.post("http://localhost:9001/query",query);
        console.log(response);
        setdata(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (query.category != "" && query.subcategory != "") {
      console.log("Hii");
      makeApiCall();
    }
  }, [query.category, query.subcategory]);

  console.log(query);
  const [location, setlocation] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const [namevalue, setnamevalue] = useState("");
  useEffect(() => {
    console.log("Updated user1:", user1);
  }, [user1]);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    // console.log(user1);
    const phoneNumber = `+91${inputvalue}`; // Make sure to use the full E.164 format
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        setInputValue("");
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  // useEffect(()=>{
  //   if(user1.name != '' && user1.phone != ''){
  //     dispatch(setotp({user1,navigate}));
  //   }
  // },[user1])

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setname(true);
        // dispatch(setotp({user1,navigate}));
        setLoading(false);
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(()=>{
    if(otp != null){
      onOTPVerify();
    }
  },[otp])

  console.log(step);
  const handleSendClick = async () => {
    console.log(inputvalue);
    if (inputvalue.length === 10 && step.current == 1) {
      step.current = 2;
      const phone = `+91${inputvalue}`;
      setNumber(inputvalue);
      setUser1({ ...user1, phone });
      console.log(user1);
      onSignup();
    } else if (inputvalue.length === 6 && step.current == 2) {
      console.log(inputvalue);
      step.current = 3;
      setotp1(inputvalue);
      setname(true);
      console.log("hiiii");
      console.log(otp);
    } else if (step.current == 3) {
      step.current = 4;
      setUser1({ ...user1, name: inputvalue });
      setnamevalue(inputvalue);
      setlocation(true);
      setInputValue("");
    }
  };

  return (
    <div className="chat-height">
      <div id="recaptcha-container"></div>
      <h1 className="heading">Chat-Bot</h1>
      <hr className="c-width" />
      <div className="text">
        <div className="t1">
          <p>Hi There , welcome to propmile Consulting.</p>
        </div>
        <div className="t2">
          <p>
            We are here to help you find your dream home. To enable us to serve
            you better , please help us with a few details.
          </p>
        </div>
        <div className="t3">
          <p>
            Before we get started ,please do share your 10 digit Indian mobile
            number. In case you are overseas , please enter your mobile number
            with country code. We promise you, there will no spamming.
          </p>
        </div>
        {number == null ? (
          <></>
        ) : (
          <>
            <div className="number">
              <input
                type="text"
                className="number-input"
                placeholder={number}
              />
            </div>
            {showOTP ? (
              <div className="t1">
                <p>We have send the otp Please Enter it Below</p>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
        {otp != null ? (
          <div className="number">
            <input type="text" className="number-input" placeholder={otp} />
          </div>
        ) : (
          <></>
        )}
        {name ? (
          <div className="t1">
            <p>MayI please Know Your name</p>
          </div>
        ) : (
          <></>
        )}
        {namevalue != "" ? (
          <div className="number">
            <input
              type="text"
              className="number-input"
              placeholder={namevalue}
            />
          </div>
        ) : (
          <></>
        )}
        {location ? (
          <>
            <div className="t2">
              <p>
                We are here to help you find your dream home. To enable us to
                serve you better , please help us with a few details.
              </p>
            </div>
            <div className="t3">
              <p>
                Before we get started ,please do share your 10 digit Indian
                mobile number. In case you are overseas , please enter your
                mobile number with country code. We promise you, there will no
                spamming.
              </p>
            </div>
            <button className="button" onClick={() => setCategory("bangalore north")}>
              North
            </button>
            <button className="button" onClick={() => setCategory("bangalore south")}>
              South
            </button>
            <button className="button" onClick={() => setCategory("bangalore east")}>East</button>
            <button className="button" onClick={() => setCategory("bangalore west")}>West</button>
            <button className="button" onClick={() => setCategory("bangalore central")}>
              Central
            </button>
          </>
        ) : (
          <></>
        )}
        {Category != "" ? (
          <div className="number">
            <input
              type="text"
              className="number-input"
              placeholder={Category}
            />
          </div>
        ) : (
          <></>
        )}
        {Category != "" ? (
          <>
            <div className="t2">
              <p>
                We are here to help you find your dream home. To enable us to
                serve you better , please help us with a few details.
              </p>
            </div>
            <button className="button" onClick={() => setsubCategory("new launch")}>
              New Launch
            </button>
            <button className="button" onClick={() => setsubCategory("under construction")}>
              Under Construction
            </button>
            <button className="button" onClick={() => setsubCategory("upcoming")}>Upcoming</button>
          </>
        ) : (
          <></>
        )}
        {subCategory != "" ? (
          <>
            <div className="number">
              <input
                type="text"
                className="number-input"
                placeholder={subCategory}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        {
          data != ''?
          // <CardsSection data={data}/>
          <ChatCard data={data}/>
          :<></>
        }
      </div>
      <input
        type="text"
        id="input-text"
        placeholder="Type Your Message..."
        value={inputvalue}
        onChange={handleInputChange}
      />
      <button className="send" onClick={handleSendClick}>
        Send
      </button>
    </div>
  );
};

export default ChatBot;
