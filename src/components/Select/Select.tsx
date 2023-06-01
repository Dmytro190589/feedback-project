import { FC, FocusEventHandler } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
export interface ISelectOption {
  value: string;
  label: string;
}
export interface ISelectProps {
  options: ISelectOption[];
  value: ISelectOption;
  onBlur: FocusEventHandler;
  onFocus: FocusEventHandler;
  placeholder: string;
  onChange:
    | ((
        newValue: SingleValue<ISelectOption>,
        actionMeta: ActionMeta<ISelectOption>
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
