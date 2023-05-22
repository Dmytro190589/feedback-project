import { FC } from 'react';
import SortLine from 'components/SortLine/SortLine';
import NotFindFeedback from 'components/NotFindFeedback/NotFoundFeedback';
import { Wrapper } from './Suggestions.styled';

export const Suggestions: FC = () => {
  return (
    <>
      <SortLine />
      <Wrapper>
        <NotFindFeedback />
      </Wrapper>
    </>
  );
};
