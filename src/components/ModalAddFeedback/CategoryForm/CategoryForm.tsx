import { Formik } from 'formik';
// import { useState } from 'react';
// import { OnChangeValue } from 'react-select';
import { Button } from 'components/Buttons/Button';
import {
  FeedbackTitle,
  Input,
  Form,
  Description,
  Category,
  InputDetails,
  Label,
  Title,
} from './CategoryForm.styled';
// import { DropdownSelect } from 'components/Select/Select';
import { IOption } from 'models/CategoriesTypes';

interface CurrentProps {
  prop: IOption[];
}
interface MyFormValues {
  feedback: string;
  details: string;
}

export const CategoryForm: React.FC<CurrentProps> = ({ prop }) => {
  // const [currentProp, setCurrentProp] = useState(prop[0].value);
  const initialValues: MyFormValues = { feedback: '', details: '' };
  // const getValue = () =>
  //   currentProp ? prop.find(e => e.value === currentProp) : undefined;
  // const onChange = (newValue: OnChangeValue<IOption, boolean>) =>
  //   setCurrentProp((newValue as IOption).value);
  return (
    <>
      <Title>Great new feedback</Title>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <FeedbackTitle htmlFor="feedback"> Feedback Title</FeedbackTitle>
          <Description>Add a short, descriptive headline</Description>
          <Input id="feedback" name="feedback" />
          <Category>Category</Category>
          <Description>Choose a category for your feedback</Description>
          {/* <DropdownSelect
            options={prop}
            onChange={onChange}
            value={getValue()}
          /> */}
          <Label htmlFor="details">Feedback Detail</Label>
          <Description>
            Include any specific comments on what should be improved, added,
            etc.
          </Description>
          <InputDetails id="details" name="details" />
          <Button color="first" width="addSave">
            Add Feedback
          </Button>
          <Button color="third" width="delete">
            Cancel
          </Button>
        </Form>
      </Formik>
    </>
  );
};
