import React from 'react';
import './styles.css'; // Import the external CSS file if required
import { useNavigate } from 'react-router-dom';

const GeneratedHtml = () => {
    
const navigate = useNavigate();

const gotonext = () => {
    navigate('/Hospital');
  };

  return(
    <div className="e2_2">
      <div className="e2_3">
        <div className="e2_4"></div>
        <span className="e2_5">HTA</span>
        <div className="e2_6"></div>
      </div>
      <span className="e2_7">log in</span>
      <div className="e2_11">
        <div className="e2_8"></div>
        <div className="e2_9"></div>
       <button onClick={gotonext}> <span className="e2_10">구글로 시작하기</span></button>
      </div>
    </div>
  );
};

export default GeneratedHtml;