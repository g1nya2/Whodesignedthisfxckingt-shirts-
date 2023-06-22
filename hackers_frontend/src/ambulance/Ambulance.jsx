import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import MapTest from '../kakaomap/map';

const Ambulance = () => {
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    symptom: '',
    age: '',
    riskLevel: '',
    gender: '',
    major: '',
  }); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const handleSubmit = () => {
    // 환자 정보를 Azure Function으로 전송
    axios.post('https://signaltransfer.azurewebsites.net/api/sendpatientinfo?', patientInfo)
      .then(response => {
        // 응답 처리 로직
        console.log(response.data); // 예시: 응답 데이터 출력
        // 페이지 이동
      })
      .catch(error => {
        // 오류 처리 로직
        console.error(error);
      });
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
      <div className="e21_45">
        <div className="e21_40"></div>
        <span className="e21_42">a병원</span>
        <span className="e21_43">병상:n/n</span>
        <span className="e21_44">남은거리:xkm</span>
      </div>
      <div className="e21_50">
        <div className="e21_47"></div>
        <button onClick={handleSubmit}><span className="e21_49">요청</span></button>
      </div>
    </div>
  );
};

export default Ambulance;
