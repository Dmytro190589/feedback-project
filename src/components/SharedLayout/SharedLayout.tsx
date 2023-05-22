import SideBar from '../SideBar/SideBar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout: FC = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};
