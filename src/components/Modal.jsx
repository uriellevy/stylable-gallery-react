import React from "react";
import "./styles/Modal.scss";

const Modal = ({ imageFromState }) => {
  return (
    <div>
      <div className="modal-backdrop" />
      <div className="modal">
        <img
          src={imageFromState}
          // style={{ display: imageFromState ? "block" : "none" }}
          className="modal-image"
        />
      </div>
    </div>
  );
};

export default Modal;
