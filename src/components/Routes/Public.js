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

function Public() {
    const properties = useSelector(state => state.properties);
    const advertisements = useSelector(state => state.advertisements);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProperties());
        dispatch(fetchAdvertisements());
        //eslint-disable-next-line
    }, []);
    return (
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
                <Route path='*' element={<NotFoundpage />} />
            </Routes>
        </Router>
    );
}

export default Public;