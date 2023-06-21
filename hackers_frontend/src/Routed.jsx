import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_page from './mainpage/main_page';
import Ambulance from './ambulance/Ambulance';
const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="/AmbulanceRequest" element={<Ambulance />} />
        </Routes>
      </Router>
    );
  };
  
export default Routing;