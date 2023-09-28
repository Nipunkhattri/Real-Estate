import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import Listpage from "../../pages/Listpage";
import NotFoundpage from "../../pages/NotFoundpage";
import SinglePropertypage from "../../pages/SinglePropertypage";
import { useSelector, useDispatch } from "react-redux";
import { fetchProperties } from "../../redux/reducers/properties.slice";
import { fetchAdvertisements } from '../../redux/reducers/advertisements.slice';
import { useEffect } from "react";
import Results from '../../pages/Resultspage';
import Aboutuspage from '../../pages/Aboutuspage';
import ContactUspage from '../../pages/ContactUspage';
import Careerspage from '../../pages/Careerspage';
import PrivacyPolicypage from '../../pages/PrivacyPolicypage';
import Disclaimerpage from '../../pages/Disclaimerpage';
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import OtpLogin from "../../pages/OtpLogin";
import ChatBot from "../SingleProperty/ChatBot";

function Public() {
    const properties = useSelector(state => state.properties);
    console.log(properties)
    const advertisements = useSelector(state => state.advertisements);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProperties());
        dispatch(fetchAdvertisements());
        //eslint-disable-next-line
    }, []);
    return (
        <>
        <ToastContainer/>
        <Router>
            <Routes>
                <Route path='/' element={<Homepage data={properties} ad={advertisements.data.advertisements} />} />
                <Route path='/results' element={<Results data={properties} />} />
                <Route path='/list' element={<Listpage data={properties} />} />
                <Route path="/property/:pid" element={<SinglePropertypage />} />
                <Route path="/about" element={<Aboutuspage />} />
                <Route path="/contact" element={<ContactUspage />} />
                <Route path="/careers" element={<Careerspage />} />
                <Route path="/privacy" element={<PrivacyPolicypage />} />
                <Route path="/disclaimer" element={<Disclaimerpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/otplogin" element={<OtpLogin />} />
                <Route path='/chatbot' element={<ChatBot/>}/>
                <Route path='*' element={<NotFoundpage />} />
            </Routes>
        </Router>
        </>
    );
}

export default Public;