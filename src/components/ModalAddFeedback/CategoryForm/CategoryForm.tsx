import * as React from 'react';
import { Formik } from 'formik';
import { Dropdown } from '../../Dropdown/Dropdown';
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
import { categoriesItem } from '../../Dropdown/CategoriesItems';

interface MyFormValues {
  feedback: string;
  details: string;
}

export const CategoryForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = { feedback: '', details: '' };
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
          <Dropdown prop={categoriesItem} />
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
