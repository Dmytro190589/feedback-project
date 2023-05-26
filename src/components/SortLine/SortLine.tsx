import { Button } from 'components/Buttons/Button';
import { SortBox } from './SortLine.styled';
import { FC, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Modal from 'components/Modal/Modal';
import ModalAddFeedback from 'components/ModalAddFeedback/ModalAddFeedback';

const SortLine: FC = () => {
  const [sort, setSort] = useState('Most Upvotes');
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => setIsModal(true);
  const submit = () => setSort(sort);
 
  return (
    <SortBox>
      <div>
        <button
          style={{
            border: 'medium none',
            background: 'transparent',
            backgroundColor: 'transparent',
            textAlign: 'center',
            color: '#F2F4FE',
          }}
        >
          Sort by : {sort}
          <BiChevronDown />
        </button>
        <div></div>
      </div>
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
    </SortBox>
  );
};
export default SortLine;
