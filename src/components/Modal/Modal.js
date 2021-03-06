import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.Module.css';


const modalRoot = document.querySelector('#modal-root');

export default function Modal({children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

    return createPortal(
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>
          {children}
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot);
}   