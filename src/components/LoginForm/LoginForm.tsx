import { ErrorMessage, Field, Form, Formik } from 'formik';

// type ErrorType = {
//   email: string;
//   password: string;
// };
export const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      // validate={values => {
      //   const errors: ErrorType = {
      //     email: '',
      //     password: '',
      //   };
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={values => console.log(values)}
    >
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email"/>
          <Field type="password" name="password" />
          <ErrorMessage name="password"/>
          <button type="submit" >
            Submit
          </button>
        </Form>
    </Formik>
  );
};
