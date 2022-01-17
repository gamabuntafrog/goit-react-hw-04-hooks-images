import React, { useEffect } from "react";

const Modal = ({toggleModal, children}) =>  {

  useEffect(() => {
  
    window.addEventListener("keydown", onClose);
    
    return () => {
      window.removeEventListener("keydown", onClose);
    }
  }, [children])
  
  const onClose = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
    if (e.code === "Escape") {
      toggleModal();
    }
  };

    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">{children}</div>
      </div>
    );
  
}

export default Modal;


