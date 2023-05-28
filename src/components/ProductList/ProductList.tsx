import { List } from "types/todo";
import { FC } from 'react';



export const ProductList: FC<List> = ({ products }) => {
  console.log(...products);
  return <div>hehehe</div>;
};