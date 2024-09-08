import React, { useState } from "react";
import Modal from "./Modal";
import "./modal.css"
const ModalParent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen)
  return (
    <div className="main-container">
      <button onClick={handleClick}>{isOpen ? "Close" : "Open"} Modal</button>
      lorem*10000
      <Modal isOpen={isOpen} onClose={handleClick}/>
    </div>
  );
};

export default ModalParent;
