import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './mainpage/mainpage';
import Ambulance from './ambulance/Ambulance';
import Hospital from './Hospital/page2'
const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/AmbulanceRequest" element={<Ambulance />} />
          <Route path="/Hospital" element={<Hospital />} />
        </Routes>
      </Router>
    );
  };
  
export default Routing;