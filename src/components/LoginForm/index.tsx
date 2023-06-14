import Modal from 'components/Modal/Modal';
import { LoginForm } from './LoginForm';
import { useState } from 'react';
import { RegisterForm } from 'components/RegisterForm/Register';
interface IProps {
  onClose: () => void;
  onSubmit: () => void;
}
function SigIn({ onClose, onSubmit }: IProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {!isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <LoginForm />
          <RegisterForm />
        </Modal>
      )}
    </>
  );
}
export default SigIn;
