import { Button } from 'components/Buttons/Button';
import {  Form, Formik } from 'formik';
import { FC } from 'react';
import { categoriesItem } from 'selectItems/selectItems';
import {
  Category,
  FeedbackTitle,
  FormSelect,
  Input,
  InputDetails,
  Label,
} from './ModalForm.styled';

export const AddForm: FC = () => {
  const initialValues = {
    feedback: '',
    details: '',
    articleType: '',
  };

  return (
    <>
      <h2>Great new feedback</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        <Form>
          <FeedbackTitle htmlFor="feedback">Feedback Title</FeedbackTitle>
          <Input
            component="textarea"
            name="feedback"
            placeholder="Add a short, descriptive headline"
          />
          <Category htmlFor="articleType">Category</Category>
          <FormSelect
            component="select"
            name="articleType"
            placeholder="Choose a category for your feedback"
          >
            {categoriesItem &&
              categoriesItem.map(item => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
          </FormSelect>
          <Label htmlFor="details">Feedback Detail</Label>
          <InputDetails
            component="textarea"
            name="details"
            placeholder="Include any specific comments on what should be improved, added,
            etc."
          />
          <Button type="submit" color="first" width="addSave">
            Add
          </Button>
          <Button color="third" width="delete">
            Cancel
          </Button>
        </Form>
      </Formik>
      ;
    </>
  );
};
