import React, { useState } from "react";
import { data } from "./data";
import "./styles.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);
  const handleSingle = (id) => {
    setSelected(selected === id ? null : id);
    console.log(selected);
  };

  const handleMultiple = (id) => {
    if(enableMulti){
    let cpyMulti = [...multiSelected];
    const indexOfCurrentId = cpyMulti.indexOf(id);
    if (indexOfCurrentId === -1) cpyMulti.push(id);
    else cpyMulti.splice(indexOfCurrentId, 1);

    setMultiSelected(cpyMulti);
    console.log(multiSelected);
    }
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        <button onClick={() => setEnableMulti((prev) => !prev)}>
          {enableMulti ? "Disable" : "Enable"} Multi Selection
        </button>
        {data &&
          data?.map((item) => (
            <div className="item">
              <div
                className="title"
                onClick={() =>
                  enableMulti ? handleMultiple(item.id) : handleSingle(item.id)
                }
              >
                <h3>{item.title}</h3>
                <span>+</span>
              </div>
              {/* {selected === item.id && <div>{item.content}</div>} */}
              {enableMulti ? multiSelected.indexOf(item.id)!== -1 && (<div>{item.content}</div>)
              : selected === item.id && <div>{item.content}</div>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordian;

