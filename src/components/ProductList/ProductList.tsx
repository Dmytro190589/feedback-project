import { List } from 'types/todo';
import { FC } from 'react';
import { TbMessageCircle2Filled, TbChevronUp } from 'react-icons/tb';
import {
  ProductBox,
  ProductDesc,
  ProductCategory,
  ProductTitle,
  ProductUpvote,
  ProductComments,
} from './ProductList.stuyed';

export const ProductList: FC<List> = ({ products }) => {
  console.log(products.map(product => product.category.charAt(0)));
  return (
    <div>
      {products.map(product => (
        <ProductBox key={product.id}>
          <ProductUpvote>
            <TbChevronUp style={{ color: '#4661E6', marginRight: '10px' }} />
            {product.upvotes}
          </ProductUpvote>
          <div>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDesc>{product.description}</ProductDesc>
            <ProductCategory>
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </ProductCategory>
          </div>
          <ProductComments>
            <TbMessageCircle2Filled
              style={{ color: '#CDD2EE', marginRight: '4px' }}
            />
            {product.comments ? product.comments.length : 0}
          </ProductComments>
        </ProductBox>
      ))}
    </div>
  );
};
