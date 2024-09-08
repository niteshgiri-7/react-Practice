import React from "react";
import "./styles.css";
const Suggestion = ({ filteredData, handleClick }) => {
  return (
    <ul>
      {filteredData
        ? filteredData.map((item) => (
            <li className="suggest" onClick={() => handleClick(item)}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
};

export default Suggestion;
