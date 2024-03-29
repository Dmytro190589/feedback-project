import { useState } from 'react';
import NoFindIcon from '../../images/svg/no-find.svg';
import { NoFindBox, NoFindText, NoFindTitle } from './NotFoundFeedback.styled';
import { Button } from 'components/Buttons/Button';
import Modal from 'components/Modal/Modal';
import ModalAddFeedback from 'components/ModalAddFeedback/ModalAddFeedback';

const NotFoundFeedback = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => setIsModal(true);
  const submit = () => console.log('submit');

  return (
    <NoFindBox>
      <img src={NoFindIcon} alt="noFind" />
      <NoFindTitle>There is no feedback yet.</NoFindTitle>
      <NoFindText>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </NoFindText>
      <Button onClick={modalOpen} color="first" width="openModal">
        + Add Feedback
      </Button>
      {isModal && (
        <Modal onClose={() => setIsModal(false)}>
          <ModalAddFeedback
            onClose={() => setIsModal(false)}
            onSubmit={submit}
          />
        </Modal>
      )}
    </NoFindBox>
  );
};
export default NotFoundFeedback;
