import React, { useState } from "react";
import "./styles.css";
const TabItems = ({ tabs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    console.log("clicked")
    setCurrentIndex(index);
  };
  return (
    <div className="mainContainer">
      <div className="topContainer">
        {tabs && tabs.length
          ? tabs.map((item, index) => (
              <span
                className="tabs"
                key={item.label}
                onClick={() => handleClick(index)}
              >
                {item.label}
              </span>
            ))
          : null}
      </div>
      <div className="content-container">
        { tabs[currentIndex] ? tabs[currentIndex].content : null}
      </div>
    </div>
  );
};

export default TabItems;
