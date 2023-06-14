import { ErrorMessage, Form, Formik } from 'formik';
import { InputField } from './RegisterForm.styled';
export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '', username: '' }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'grey',
        }}
      >
        <label htmlFor="login">Register</label>
        <InputField type="text" name="username" />
        <ErrorMessage name="username" />

        <InputField type="email" name="email" />
        <ErrorMessage name="email" />

        <InputField type="password" name="password" />
        <ErrorMessage name="password" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
