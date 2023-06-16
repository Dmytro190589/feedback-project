import { Form, Formik } from 'formik';
import { FaPencilAlt } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
  Btn,
  Content,
  Email,
  Button,
  Input,
  Login,
  Title,
  Eye,
  Container,
} from './RegisterForm.styled';
import { SetStateAction, useState } from 'react';
export default function RegisterForm() {
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [eye, setEye] = useState(false);
  return (
    <Content>
      <Formik
        onSubmit={values => {
          console.log({ email: email, password: values.password });
        }}
        initialValues={{ email: '', password: '' }}
      >
        <Form
          style={{
            color: 'white',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {status && (
            <Email onClick={() => setStatus(false)}>
              {email}
              <FaPencilAlt />
            </Email>
          )}
          {status ? (
            <>
              <Title>Create a password</Title>
              <Container>
                <Input
                  name="password"
                  type={eye ? 'text' : 'password'}
                  autoComplete="false"
                  placeholder="Enter your password"
                />
                <Eye onClick={() => setEye(prev => !prev)}>
                  {eye ? <AiFillEyeInvisible /> : <AiFillEye />}
                </Eye>
              </Container>
              <Button type="submit">Sign up</Button>
            </>
          ) : (
            <>
              <Title>Sign-Up</Title>
              <Input
                name="email"
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setEmail(e.target.value)
                }
                autoComplete="false"
                value={email}
                placeholder="Enter your email"
              />
              <Btn onClick={() => setStatus(true)}>Next</Btn>

              <Login to="/login">Login</Login>
            </>
          )}
        </Form>
      </Formik>
    </Content>
  );
}
