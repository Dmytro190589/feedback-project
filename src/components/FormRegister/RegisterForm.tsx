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
            <Title>Створити пароль для входу</Title>
          ) : (
            <Title>Регістрація</Title>
          )}
          {status ? (
            <>
              <Container>
                <Input
                  name="password"
                  type={eye ? 'text' : 'password'}
                  placeholder="Створіть пароль"
                />
                <Eye onClick={() => setEye(prev => !prev)}>
                  {eye ? <AiFillEyeInvisible /> : <AiFillEye />}
                </Eye>
              </Container>
              <Button type="submit">Зареєструвати акаунт</Button>
            </>
          ) : (
            <>
              <Input
                name="email"
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setEmail(e.target.value)
                }
                value={email}
                placeholder="Введі свій емейл"
              />
              <Btn onClick={() => setStatus(true)}>Далі</Btn>

              <Login to="/login">Я маю акаунт</Login>
            </>
          )}
        </Form>
      </Formik>
    </Content>
  );
}
