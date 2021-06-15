import { useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

function Modal({ children, onClose }) {
  const overlay = useRef(null);
  const modal = document.querySelector('#modal');

  const onClick = (e) => {
    e && e.stopPropagation();
    onClose();
  }

  return createPortal(
    <div className="modal">
      <div className="modal__overlay" onClick={onClick} ref={overlay}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <div className="modal__close" onClick={onClose}>❌</div>
          <div className="modal__body">
            {children}
          </div>
        </div>
      </div>
    </div>,
    modal
  )
}

export default Modal;
