import Modal from 'components/Modal/Modal';
import { LoginForm } from './LoginForm';
interface IProps {
  onClose: () => void;
  onSubmit: () => void;
}
function SigIn({ onClose, onSubmit }: IProps) {
  return (
    <Modal onClose={console.log}>
      <LoginForm />
    </Modal>
  );
}
export default SigIn;
