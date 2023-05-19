import SideBar from 'components/Sidebar/SideBar';
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
