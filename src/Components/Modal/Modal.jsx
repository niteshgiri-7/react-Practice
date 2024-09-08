import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.querySelector(".main-container").style.overflow =
        "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return createPortal(
    <>
      <div className="modal-container">
        <div className="modal-header">This is header</div>
        <button onClick={onClose}>&times;</button>
        <div className="modal-content">This is content</div>
        <div className="modal-footer"> THis is footer</div>
      </div>
      <div className="trans-box" />
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
