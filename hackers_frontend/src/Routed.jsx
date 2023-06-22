import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './mainpage/mainpage';
import Ambulance from './ambulance/Ambulance';
import Hospital from './Hospital/page2'
import GeneratedHtml from './login/index'
import Ambulance2 from './ambulance/new/Ambulance2';

const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Ambulance" element={<Ambulance />} />
          <Route path="/Hospital" element={<Hospital />} />
          <Route path="/Login" element={<GeneratedHtml/>}/>
          <Route path="/next" element={<Ambulance2/>}/>
        </Routes>
      </Router>
    );
  };
  
export default Routing;