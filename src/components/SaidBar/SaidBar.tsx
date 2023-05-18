import Header from 'components/Header/Header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const SaidBar: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default SaidBar;
