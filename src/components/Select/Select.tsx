import { FC, FocusEventHandler } from 'react';
import Select, { ActionMeta, GroupBase, SingleValue, StylesConfig, ThemeConfig } from 'react-select';
import { IOption } from 'models/CategoriesTypes';

export interface ISelectProps {
  options: IOption[];
  value: IOption | undefined;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  placeholder?: string;
  styles: StylesConfig<IOption, false, GroupBase<IOption>>;
  theme: ThemeConfig;

  components: any;
  
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
  styles,
  theme,
  components,
  placeholder,
}) => {
  return (
    <Select
      styles={styles}
      theme={theme}
      options={options}
      components={components}
      classNamePrefix="react-select"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      onFocus={onFocus}
      placeholder=""
    />
  );
};
