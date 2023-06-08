import { IOption } from 'models/CategoriesTypes';
import {
  IndicatorSeparatorProps,
  StylesConfig,
  ThemeConfig,
} from 'react-select';

export const colorStyles: StylesConfig<IOption> = {
  control: () => ({
    display: 'flex',
  }),
  placeholder: base => ({
    ...base,
    color: '#f2f4febf',
  }),
  singleValue: (base, ) => ({
    ...base,
    color: '#f2f4fe',
  }),
  option: (base, { isSelected }) => ({
    ...base,
    color: isSelected ? '#AD1FEA' : '#647196',
    ':active': {
      color: '#AD1FEA',
    },
    ':not(:last-child)': {
      borderBottom: '1px solid #3a43747f',
    },
  }),
};

export const themeStyles: ThemeConfig = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'none',
    primary: 'none',
  },
});

export const IndicatorSeparator = ({
  innerProps,
}: IndicatorSeparatorProps<IOption, true>) => {
  return <span style={{ display: 'none' }} {...innerProps} />;
};
