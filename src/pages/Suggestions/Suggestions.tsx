import { useEffect } from 'react';
import SortLine from 'components/SortLine/SortLine';
import NotFindFeedback from 'components/NotFindFeedback/NotFoundFeedback';
import { Wrapper } from './Suggestions.styled';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { fetchProducts } from 'redux/todo/product-operations';
import { ProductList } from 'components/ProductList/ProductList';


export const Suggestions = () => {
  const dispatch = useAppDispatch();
  const { isLoading, productRequests, error} = useTypedSelector(state => state.todo)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); 

  return (
    <>
      <SortLine />
      <Wrapper>
        {isLoading ? (
          <div>Loading..</div>
        ) : !error ? (
          <ProductList products={productRequests} />
        ) : (
          <NotFindFeedback />
        )}
      </Wrapper>
    </>
  );
};
