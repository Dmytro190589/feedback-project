import { Button } from 'components/Buttons/Button';
import { SortBox } from './SortLine.styled';
import { FC, useState } from 'react';
import Modal from 'components/Modal/Modal';
import ModalAddFeedback from 'components/ModalAddFeedback/ModalAddFeedback';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { SortItem } from 'components/Dropdown/CategoriesItems';


const SortLine: FC = () => {
  const [sort, setSort] = useState('Most Upvotes');
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => setIsModal(true);
  const submit = () => setSort(sort);

  return (
    <SortBox>
      <div>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            color: '#F2F4FE',
          }}
        >
          Sort by : <Dropdown prop={SortItem} />
        </span>
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
