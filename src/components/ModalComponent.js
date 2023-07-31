import React, { useContext } from "react";
import BsContext from "../Context/BsContext";
import "../Css/ModalComponent.css";

// Modal which takes two props (heading and message), this is called using function showMsg of context.
function Modal(props) {
  const context = useContext(BsContext);
  const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } = context;

  //setting errorPopup to false and errorMessage to "" on close modal
  const handleClosePopup = () => {
    setErrorMessage("");
    setErrorPopup(false);
  };

  return (
    <>
      {errorPopup && (
        <div
          className={`modal-container ${errorPopup ? "active" : "inactive"}`}>
          <div className="modal">
            <div className="modal-header">
              <strong>Message</strong>
            </div>
            <div className="modal-body">
              <span>{errorMessage}</span>
            </div>
            <div className="modal-footer">
              <button onClick={handleClosePopup}>Close</button>
              {/* <button onClick={notOk}>Cancel</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
