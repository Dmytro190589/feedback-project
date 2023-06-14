import SigIn from 'components/LoginForm';
// import Modal from 'components/Modal/Modal';

export default function Login() {
  const submit = () => console.log('submit');
  return (
    <>
      <SigIn
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
        onSubmit={submit}
      />
    </>
  );
}
