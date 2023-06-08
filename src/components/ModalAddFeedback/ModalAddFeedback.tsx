import { StyledPlusIcon, Box } from './ModalAddFeedback.styled';
// import CategoryForm from './CategoryForm/CategoryForm';
import { AddForm } from 'components/FormikModal';
// import { categoriesItem } from 'selectItems/selectItems';
interface IProps {
  onSubmit: () => void;
  onClose: () => void;
}

export default function ModalAddFeedback({ onClose, onSubmit }: IProps) {
  return (
    <Box>
      <StyledPlusIcon />
      <AddForm />
    </Box>
  );
}
