import Select, { OnChangeValue   } from 'react-select';
import { useState, FC } from 'react';
import { IOption } from 'models/CategoriesTypes';
import { IndicatorSeparator } from './Dropdown.steled';

interface CurrentProps {
  prop: IOption[];
  // component:any
}

export const Dropdown: FC<CurrentProps> = ({ prop }) => {
  const [currentProp, setCurrentProp] = useState(prop[0].value);
  const getValue = () =>
    currentProp ? prop.find(e => e.value === currentProp) : undefined;

  const onChange = (newValue: OnChangeValue<IOption, boolean>) =>
    setCurrentProp((newValue as IOption).value);

  return (
    <>
      <Select
        styles={{
          control: () => ({
            display: 'flex',
          }),
          singleValue: (base, state) => ({
            ...base,
            color: state ? '#f2f4febf' : '#f2f4fe',
          }),
          option: (base, { isFocused }) => ({
            ...base,
            color: isFocused ? '#AD1FEA' : '#647196',
            ':active': {
              color: '#AD1FEA',
            },
            ':not(:last-child)': {
              borderBottom: '1px solid #3a43747f',
            },
          }),
        }}
        theme={theme => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary25: 'none',
            primary: 'none',
          },
        })}
        components={{ IndicatorSeparator }}
        classNamePrefix="react-select"
        onChange={onChange}
        value={getValue()}
        isSearchable={false}
        options={prop}
        placeholder="Categories..."
      />
    </>
  );
};
