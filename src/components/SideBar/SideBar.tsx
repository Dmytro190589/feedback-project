import { FC } from 'react';
import { Nav, SideBarNav } from './SideBar.styled';
import { Outlet } from 'react-router-dom';

const SideBar: FC = () => {
  return (
    <>
      <Nav to="#"></Nav>
      <SideBarNav to="#"></SideBarNav>
      <Outlet />
    </>
  );
};
export default SideBar;
