import React from "react";
import "./styles/Modal.scss";
import { ImCross } from "react-icons/im";

const Modal = ({ imageFromState, closeModalHandler }) => {
  return (
    <div>
      <div className="modal-backdrop" />
      <button>
        <ImCross className="cross-icon" onClick={closeModalHandler} />
      </button>

      <img
        src={imageFromState}
        // style={{ display: imageFromState ? "block" : "none" }}
        className="modal-image"
      />
    </div>
  );
};

export default Modal;
