import React, { useState } from 'react';
import './main.css';

const MyComponent = () => {
  const [count29, setCount29] = useState(0);
  const [count30, setCount30] = useState(0);

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

  return (
    <div className="v8_31">
      <div className="v9_18">
        <div className="v8_32"></div>
        <span className="v9_2">HTA</span>
        <div className="v9_5"></div>
      </div>
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
    </div>
  );
};

export default MyComponent;
