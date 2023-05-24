import { useEffect } from 'react';
import SortLine from 'components/SortLine/SortLine';
import NotFindFeedback from 'components/NotFindFeedback/NotFoundFeedback';
import { Wrapper } from './Suggestions.styled';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { fetchProducts } from 'redux/todo/product-operations';


export const Suggestions = () => {
  const dispatch = useAppDispatch();
  const state = useTypedSelector(state => state.todo)
    ;
  console.log(state);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); 

  return (
    <>
      <SortLine />
      <Wrapper>
        <NotFindFeedback />
      </Wrapper>
    </>
  );
};
