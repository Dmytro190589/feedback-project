import { FC } from 'react';
import NoFindIcon from '../../images/svg/no-find.svg';
import { NoFindBox, NoFindText, NoFindTitle } from './NotFindFeedback.styled';

const NotFindFeedback: FC = () => {
  return (
    <NoFindBox>
      <img src={NoFindIcon} alt="noFind" />
      <NoFindTitle>There is no feedback yet.</NoFindTitle>
      <NoFindText>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </NoFindText>
    </NoFindBox>
  );
};
export default NotFindFeedback;
