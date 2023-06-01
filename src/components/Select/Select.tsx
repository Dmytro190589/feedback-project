import { FC, FocusEventHandler } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { IOption } from 'models/CategoriesTypes';

export interface ISelectProps {
  options: IOption[];
  value: IOption | undefined;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  placeholder?: string;
  onChange:
    | ((
        newValue: SingleValue<IOption>,
        actionMeta: ActionMeta<IOption>
      ) => void)
    | undefined;
}
export const DropdownSelect: FC<ISelectProps> = ({
  options,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
}) => {
  return (
    <Select
      options={options}
      classNamePrefix="react-select"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      onFocus={onFocus}
      placeholder=""
    />
  );
};
