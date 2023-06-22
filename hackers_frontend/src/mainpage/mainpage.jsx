import React from 'react';
import './main.css';
import {useNavigate } from 'react-router-dom';
const MainPage = () => {

  const navigate = useNavigate();
  
  const handleAmbulanceRequest = () => {
    navigate('/AmbulanceRequest');

  };
  const handleHospitalRequest = () => {
    navigate('/Hospital');
  };


  return (
    <div className="e4_8">
      <div className="e9_16">
        <div className="e6_24"></div>
       <button onClick={handleAmbulanceRequest} ><span className="e4_14">엠뷸런스</span></button>
      </div>
      <div className="e9_15">
        <div className="e6_23"></div>
        <button onClick={handleHospitalRequest}><span className="e4_15">병원</span></button>
      </div>
      <div className="e9_17">
        <div className="e8_26"></div>
        <span className="e8_28">@2023 HTA system</span>
        <div className="e8_29"></div>
      </div>
      <div className="e9_20">
        <span className="e9_19">Hospital to ambulance</span>
        <div className="e7_14"></div>
      </div>
    </div>
  );
};


export default MainPage;
// <button onClick = {handleIndustryRequest}><span className="e60_12">CHANGUP</span></button>

