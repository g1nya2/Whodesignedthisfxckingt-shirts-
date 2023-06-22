import React, { useState } from 'react';
import './black.css';
import MapTest from '../kakaomap/map';
import { useNavigate } from 'react-router-dom';

const Ambulance = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    symptom: '',
    age: '',
    riskLevel: '',
    gender: '',
    major: '',
  }); 
  const navigate = useNavigate();
  
  const gotonext = () => {
    navigate('/next');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
 

  return (
    
    <div className="e12_3">
      <MapTest/>
      <div className="e12_4">
        <div className="e12_5"></div>
        <div className="e12_7"></div>
        <span className="e12_16">HTA</span>
      </div>
      <span className="e12_8">환자정보입력</span>
      <div className="e12_9"></div>
      <div className="e21_35">
        <div className="e22_2"></div>
        <input
          type="text"
          name="name"
          className="e22_3"
          placeholder="이름"
          value={patientInfo.name}
          onChange={handleChange}
        />
      </div>

      <div className="e21_36">
        <div className="e22_8"></div>
        <input
          type="text"
          name="symptom"
          className="e22_10"
          placeholder="증상"
          value={patientInfo.symptom}
          onChange={handleChange}
        />
      </div>

      <div className="e21_38">
        <div className="e22_14"></div>
        <input
          type="text"
          name="riskLevel"
          className="e22_15"
          placeholder="위험도"
          value={patientInfo.riskLevel}
          onChange={handleChange}
        />
      </div>
      <div className="e21_46">
        <div className="e22_6"></div>
        <input
          type="text"
          name="gender"
          className="e22_7"
          placeholder="성별"
          value={patientInfo.gender}
          onChange={handleChange}
        />
      </div>
      <div className="e21_37">
        <div className="e22_4"></div>
        <input
          type="text"
          name="age"
          className="e22_5"
          placeholder="나이"
          value={patientInfo.age}
          onChange={handleChange}
        />
      </div>
      <div className="e21_99">
        <div className="e22_22"></div>
        <input
          type="text"
          name="major"
          className="e22_23"
          placeholder="전공"
          value={patientInfo.major}
          onChange={handleChange}
        />
      </div>
      <span className="e21_39">병원리스트</span>




      
            
      <div className="e44_128">
              <div  className="e44_129"></div>
              <span  className="e44_130">a병원</span>
              <span  className="e44_131">병상: n/n</span>
              <span  className="e44_132">남은거리: xkm</span>
            </div>

            <div className="e44_137">
              <div  className="e44_138"></div>
              <span  className="e44_139">a병원</span>
              <span  className="e44_140">병상: n/n</span>
            <span  className="e44_141">남은거리: xkm</span>
          </div>

            <div className="e44_146">
              <div  className="e44_147"></div>
              <span  className="e44_148">a병원</span>
              <span  className="e44_149">병상: n/n</span>
            <span  className="e44_150">남은거리: xkm</span>
          </div>

            <div className="e44_155">
              <div  className="e44_156"></div>
              <span  className="e44_157">a병원</span>
              <span  className="e44_158">병상: n/n</span>
            <span  className="e44_159">남은거리: xkm</span>
          </div>
          
          <div className="e58_3">
            <div  className="e58_4"></div>
            <span  className="e58_5">a병원</span>
            <span  className="e58_6">병상: n/n</span>
            <span  className="e58_7">남은거리: xkm</span>
          </div>

          
            

          <div className="e58_12">
              <div  className="e58_13"></div>
              <span  className="e58_14">a병원</span>
              <span  className="e58_15">병상: n/n</span>
              <span  className="e58_16">남은거리: xkm</span>
          </div>

          <div className="e58_8">
            <div  className="e58_9"></div>
            <button onClick={gotonext}><span className="e58_10">요청</span></button>
          </div>
        </div>
  );
};

export default Ambulance;
