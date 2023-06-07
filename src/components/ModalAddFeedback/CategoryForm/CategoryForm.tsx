import { Formik, Form } from 'formik';
import { Button } from 'components/Buttons/Button';
import {
  FeedbackTitle,
  Description,
  Category,
  InputDetails,
  Label,
  Title,
  Input,
} from './CategoryForm.styled';
import { IOption } from 'models/CategoriesTypes';
import FormikReactSelect from 'components/Select/FormikReactSelect';

interface CurrentProps {
  prop: IOption[];
}

export default function CategoryForm({ prop }: CurrentProps) {
  const initialValues = {
    feedback: '',
    details: '',
    articleType: '',
  };
  return (
    <>
      <Title>Great new feedback</Title>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <FeedbackTitle htmlFor="feedback"> Feedback Title</FeedbackTitle>
          <Description>Add a short, descriptive headline</Description>
          <Input component="textarea" name="feedback" />
          <Category>Category</Category>
          <Description>Choose a category for your feedback</Description>
          <FormikReactSelect
            name="articleType"
            options={prop}
            isSearchable={false}
            placeholder="Choose categories"
          />
          <Label htmlFor="details">Feedback Detail</Label>
          <Description>
            Include any specific comments on what should be improved, added,
            etc.
          </Description>
          <InputDetails component="textarea" name="details" />
          <Button type="submit" color="first" width="addSave">
            Add
          </Button>
          <Button color="third" width="delete">
            Cancel
          </Button>
        </Form>
      </Formik>
    </>
  );
}
