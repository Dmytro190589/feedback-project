import { OnChangeValue} from 'react-select';
import { useState, FC } from 'react';
import { IOption } from 'models/CategoriesTypes';
import { IndicatorSeparator, colorStyles, themeStyles } from './Dropdown.styled';
import { DropdownSelect } from 'components/Select/Select';

interface CurrentProps {
  prop: IOption[];
}

export const Dropdown: FC<CurrentProps> = ({ prop }) => {
  const [currentProp, setCurrentProp] = useState(prop[0].value);
  const getValue = () =>
    currentProp ? prop.find(e => e.value === currentProp) : undefined;

  const onChange = (newValue: OnChangeValue<IOption, boolean>) =>
    setCurrentProp((newValue as IOption).value);
  
  return (
    <>
      <DropdownSelect
        styles={{ ...colorStyles }}
        theme={themeStyles}
        components={{ IndicatorSeparator }}
        // classNamePrefix="react-select"
        onChange={onChange}
        value={getValue()}
        // isSearchable={false}
        options={prop}
      />
    </>
  );
};
