import SigIn from 'components/LoginForm';
// import Modal from 'components/Modal/Modal';

export default function Login() {
  const submit = () => console.log('submit');
  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        width: '250px',
        height: '250px',
      }}
    >
      <SigIn
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
        onSubmit={submit}
      />
    </div>
  );
}
