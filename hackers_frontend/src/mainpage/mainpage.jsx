// MainPage.js
import './main.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  
  const handleAmbulanceRequest = () => {
    navigate('/Ambulance');
  };

  const handleLoginRequest = () => {
    navigate('/Login');
  };


  const handleExternalLink = () => {
    window.open('https://github.com/hackersground-kr/Whodesignedthisfxckingt-shirts-');
  };

  return (
    <div className="e4_8">
      <div className="e9_16">
        <div className="e6_24"></div>
        <button onClick={handleAmbulanceRequest}><span className="e4_14">엠뷸런스</span></button>
      </div>
      <div className="e9_15">
        <div className="e6_23"></div>
        <button onClick={handleLoginRequest}><span className="e4_15">병원</span></button>
      </div>
      <div className="e9_17">
        <div className="e8_26"></div>
        <span className="e8_28">@2023 HTA system</span>
        <button onClick={handleExternalLink} className="e8_29"></button>
      </div>
      <div className="e9_20">
        <span className="e9_19">Hospital to ambulance</span>
        <div className="e7_14"></div>
      </div>
    </div>
  );
};

export default MainPage;