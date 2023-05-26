import { StyledPlusIcon, Box, Title } from './ModalAddFeedback.styled';
import { CategoryForm } from './CategoryForm/CategoryForm';
interface IProps {
  onSubmit: () => void;
  onClose: () => void;
}

export default function ModalAddFeedback({ onClose, onSubmit }: IProps) {
  return (
    <Box>
      <StyledPlusIcon />
      <Title>Great new feedback</Title>
      <CategoryForm />
    </Box>
  );
}
