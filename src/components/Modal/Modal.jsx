import React from 'react';

import './Modal.scss';

const Modal = ({ isModalOpened, children, handleClose }) => {
  if (!isModalOpened) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="modal__close" onClick={handleClose}>&times;</button>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
