import Select, { OnChangeValue } from 'react-select';
import { useState } from 'react';
import { IOption } from 'models/CategoriesTypes';
import { categoriesItem } from './CategoriesItems';

export const Dropdown = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const getValue = () =>
    currentCategory
      ? categoriesItem.find(e => e.value === currentCategory)
      : undefined;
  const onChange = (newValue: OnChangeValue<IOption, boolean>) =>
    setCurrentCategory((newValue as IOption).value);

  return (
    <>
      <Select
        classNamePrefix="react-select"
        onChange={onChange}
        value={getValue()}
        isSearchable={false}
        options={categoriesItem}
        placeholder="Categories..."
      />
    </>
  );
};
