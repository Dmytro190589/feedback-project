import Header from 'components/Header/Header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const SaidBar: FC = () => {
  return (
    <div style={{ width: '100vh', height: '150px', backgroundColor: 'red' }}>
      <Header />
      <Outlet />
    </div>
  );
};
export default SaidBar;
