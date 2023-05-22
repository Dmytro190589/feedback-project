import { Button } from 'components/Buttons/Button';
import { SortBox } from './SortLine.styled';
import { FC, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const SortLine: FC = () => {
  const [sort, setSort] = useState('Most Upvotes');
  const test = () => {
    console.log('sorting line');
    setSort(sort);
    
  };
;
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
      <Button onClick={test} color="first" width="openModal">
        + Add Feedback
      </Button>
    </SortBox>
  );
};
export default SortLine;
