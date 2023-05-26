import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as ArrowLeft } from 'icons/icon-arrow-left.svg';
interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}
const modalEl = document.getElementById('modal-root') as HTMLElement;
const ESCAPE_KEY = 'Escape';

export default function Modal({ onClose, children }: IProps) {
  useEffect(() => {
    const escapeModal = (event: KeyboardEvent) => {
      if (event.code === ESCAPE_KEY) {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', escapeModal);

    return () => {
      window.removeEventListener('keydown', escapeModal);
    };
  }, [onClose]);

  const handleBackdropCloseModal = ({
    target,
    currentTarget,
  }: React.MouseEvent) => {
    if (target === currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <div
      onClick={handleBackdropCloseModal}
      style={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#fff',
      }}
    >
      <div
        style={{
          position: 'relative',
          minWidth: '375px',
          minHeight: '893px',
          backgroundColor: '#F2F2F2',
          padding: '88px 24px 77px 24px',
          borderRadius: '16px',
        }}
      >
        <button
          style={{
            color: 'red',
            position: 'absolute',
            top: '30px',
            left: '0',
          }}
        >
          <ArrowLeft style={{ marginRight: '16px' }} /> Go Back
        </button>

        {children}
      </div>
    </div>,
    modalEl
  );
}
