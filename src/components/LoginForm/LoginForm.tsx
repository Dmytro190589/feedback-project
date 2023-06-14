import { ErrorMessage, Form, Formik } from 'formik';
import { InputField } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
          backgroundColor:"green"
        }}
      >
        <label htmlFor="login">Login</label>
        <InputField type="email" name="email"  />
        <ErrorMessage name="email" />
        <InputField type="password" name="password"  />
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
