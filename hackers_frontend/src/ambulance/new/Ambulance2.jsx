import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import MapTest from '../../kakaomap/map';
const Ambulance2 = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
      });
    
      // 브라우저의 위치 정보를 가져와서 state에 저장합니다.
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: false,
          timeout: 2000,
          maximumAge: 1000,
        }
      );

    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
        function deg2rad(deg) {
          return deg * (Math.PI/180)
        }
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }

    const data1 = {
        latitude : 35.866711290459,
        longitude : 128.60431539634  ,
    }

    const data2 = {
        latitude : 35.84735764588 ,
        longitude : 128.5850871793   ,
    }


    const data3 = {
        latitude : 35.86956274479 ,
        longitude : 128.58297190884 ,
    }


    const data4 = {
        latitude : 35.88438330889,
        longitude : 128.62437695795  ,
    }


    const data5 = {
        latitude : 35.843908659648,
        longitude :  128.56807920723,
    }


    const data6 = {
        latitude : 35.95674049984 ,
        longitude :  128.56412500124,
    }




  const [patientInfo, setPatientInfo] = useState({
    name: '',
    symptom: '',
    age: '',
    riskLevel: '',
    gender: '',
    major: '',
  }); 
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  const handleSubmit = () => {
    // 환자 정보를 Azure Function으로 전송
    if (!isLoading) {
      setIsLoading(true);

      try {
        // 환자 정보를 Azure Function으로 전송
        axios.post(
          'https://signaltransfer.azurewebsites.net/api/sendpatientinfo?code=R9V8S0-sZCHp52nwEIVBVpgfgvmHXXBdWoLFfiibAgFqAzFu3c6hSg==',
          patientInfo
        );

        // 응답 처리 로직
       // 예시: 응답 데이터 출력
        // 페이지 이동
      } catch (error) {
        // 오류 처리 로직
        console.error(error);
      }

      setIsLoading(false);
    }
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




      
            
      <button className="e44_128" onClick={handleSubmit}>
              <div  className="e44_129"></div>
              <span  className="e44_130">경북대학교 병원</span>
              <span  className="e441_131">병상: 7/32</span>
              <span  className="e441_132">남은거리: {getDistanceFromLatLonInKm(location.latitude,location.longitude,data1.latitude,data1.longitude).toFixed(1)}km</span>
            </button>

            <div className="e44_137">
              <div  className="e44_138"></div>
              <span  className="e44_139">영남대학교 병원</span>
              <span  className="e44_140">병상: 10/30</span>
            <span  className="e44_141">남은거리: {getDistanceFromLatLonInKm(location.latitude,location.longitude,data2.latitude,data2.longitude).toFixed(1)}km</span>
          </div>
          
            <div className="e44_146">
              <div  className="e44_147"></div>
              <span  className="e44_148">계명대학교 동산병원</span>
              <span  className="e441_149">병상: 3/40</span>
            <span  className="e44_150">남은거리:   {getDistanceFromLatLonInKm(location.latitude,location.longitude,data3.latitude,data3.longitude).toFixed(1)}km</span>
          </div>
  
            <div className="e44_155">
              <div  className="e44_156"></div>
              <span  className="e44_157">대구파티마 병원</span>
              <span  className="e44_158">병상: 34/35</span>
            <span  className="e441_159">남은거리: {getDistanceFromLatLonInKm(location.latitude,location.longitude,data4.latitude,data4.longitude).toFixed(1)}km</span>
          </div>
          
          <div className="e58_3">
            <div  className="e58_4"></div>
            <span  className="e58_5">대구가톨릭 대학교병원</span>
            <span  className="e58_6">병상: 31/34</span>
            <span  className="e58_7">남은거리: {getDistanceFromLatLonInKm(location.latitude,location.longitude,data5.latitude,data5.longitude).toFixed(1)}km</span>
          </div>

          
            

          <div className="e58_12">
              <div  className="e58_13"></div>
              <span  className="e58_14">칠곡경북대학교병원</span>
              <span  className="e58_15">병상: 12/24</span>
              <span  className="e58_16">남은거리: {getDistanceFromLatLonInKm(location.latitude,location.longitude,data6.latitude,data6.longitude).toFixed(1)}km</span>
          </div>

          <div className="e58_8">
            <div  className="e58_9"></div>
            <button onClick={handleSubmit}><span className="e58_10">요청</span></button>
          </div>
        </div>
  );
};

export default Ambulance2;
