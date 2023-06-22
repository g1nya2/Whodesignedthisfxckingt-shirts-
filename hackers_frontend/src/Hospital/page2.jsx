/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';
import MapTest from '../kakaomap/map copy';


const Hospital = () => {
  const [count29, setCount29] = useState(0);
  const [count30, setCount30] = useState(0);
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    symptom: '',
    age: '',
    riskLevel: '',
    gender: '',
    major: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const FloatingAlert = ({ patientInfo, onAccept, onReject }) => (
    <div className="floatingAlert">
      <h4 className="alertcss">{patientInfo.name} - {patientInfo.symptom}</h4>
      <ul>
        <li className="alertcss">성별: {patientInfo.gender}</li>
        <li className="alertcss">나이: {patientInfo.age}</li>
        <li className="alertcss">중증: {patientInfo.riskLevel}</li>
        <li className="alertcss">학과: {patientInfo.major}</li>
        <li className="alertcss">증상: {patientInfo.symptom}</li>
      </ul>
      <button onClick={onAccept} className="alertcss">수락</button>
      <button onClick={onReject} className="alertcss">거절</button>
    </div>
  );
  

  const handleButtonAction = (className) => {
    if (className === "v10_18") {
      setCount30(count30 + 1);
    } else if (className === "v10_19") {
      if(count30>0){
        setCount30(count30 - 1);
      }
    } else if (className === "v10_20") {
      setCount29(count29 + 1);
    } else if (className === "v10_21") {
      if(count29>0){
        setCount29(count29 - 1);
      }
    }
  };

  const [initialRender, setInitialRender] = useState(false);

  const [patientInfoList, setPatientInfoList] = useState([]);
  useEffect(() => {
    if (initialRender) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            'https://signaltransfer.azurewebsites.net/api/sendpatientinfo?code=R9V8S0-sZCHp52nwEIVBVpgfgvmHXXBdWoLFfiibAgFqAzFu3c6hSg=='
          );
          const data = response.data;
          if (data && data.name && data.symptom) {
            setPatientInfoList((oldList) => [...oldList, data]);
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [initialRender]);

  useEffect(() => {
    setInitialRender(true);
  }, []);

  const handleAccept = (index) => {
    // 수락 버튼을 눌렀을 때 처리할 기능 작성
    const newList = patientInfoList.filter((_, idx) => idx !== index);
    setPatientInfoList(newList);
  };
  
  const handleReject = (index) => {
    // 거절 버튼을 눌렀을 때 처리할 기능 작성
    const newList = patientInfoList.filter((_, idx) => idx !== index);
    setPatientInfoList(newList);
  };

  return (
    
    <div className="v8_31">
      <div className="v9_18">
        <div className="v8_32"></div>
        <span className="v9_2">HTA</span>
        <div className="v9_5"></div>
      </div>
      <MapTest/>
      <span className="v10_22">병상 상태 업데이트</span>
      <button className="v10_18" onClick={() => handleButtonAction("v10_18")}></button>
      <button className="v10_19" onClick={() => handleButtonAction("v10_19")}></button>
      <button className="v10_20" onClick={() => handleButtonAction("v10_20")}></button>
      <button className="v10_21" onClick={() => handleButtonAction("v10_21")}></button>
      <div className="v10_23"></div>
      <span className="v10_24">전체병상개수 : </span>
      <span className="v10_25">남은병상개수 : </span>
      <span className="v10_29">{count29}</span>
      <span className="v10_30">{count30}</span>
      <div className="name"></div>
      <div className="name"></div>
      <div className="name"></div>
      <div className="name"></div>
      <div>
      {patientInfoList.map((patientInfo, index) => (
        <FloatingAlert 
          key={index}
          patientInfo={patientInfo}
          onAccept={() => handleAccept(index)}
          onReject={() => handleReject(index)}
        />
      ))}
      </div>
    </div>
  );
};

export default Hospital;
