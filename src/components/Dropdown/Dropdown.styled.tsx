import { IOption } from 'models/CategoriesTypes';
import { IndicatorSeparatorProps } from 'react-select';

export const IndicatorSeparator = ({
innerProps,
}: IndicatorSeparatorProps<IOption, true>) => {
return <span style={{ display: 'none' }} {...innerProps} />;
};
