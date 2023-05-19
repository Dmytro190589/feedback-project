import SideBar from 'components/Sidebar/SideBar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};
export default Layout;
