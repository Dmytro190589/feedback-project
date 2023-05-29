import { IOption } from "models/CategoriesTypes";

export const categoriesItem: IOption[] = [
    {
      value: 'all',
      label: 'All',
    },
    {
      value: 'ui',
      label: 'UI',
    },
    {
      value: 'ux',
      label: 'UX',
    },
    {
      value: 'enhancement',
      label: 'Enhancement',
    },
    {
      value: 'bug',
      label: 'Bug',
    },
    {
      value: 'feature',
      label: 'Feature',
    },
];
  
export const SortItem: IOption[] = [
  {
    value: 'most Upvotes',
    label: 'Most Upvotes',
  },
  {
    value: 'least Upvotes',
    label: 'Least Upvotes',
  },
  {
    value: 'most Comments',
    label: 'Most Comments',
  },
  {
    value: 'least Comments',
    label: 'Least Comments',
  }
];