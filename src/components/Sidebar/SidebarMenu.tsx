import { FC } from 'react';
import { SidebarItems } from 'models/SidebarItems';
import { Item, SidebarLabel, SidebarLink } from './sideBar.styled';

type SidebarLinkProps = {
  item: SidebarItems;
};

const SidebarMenu: FC<SidebarLinkProps> = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <Item>
          <SidebarLabel>{item.title}</SidebarLabel>
        </Item>
      </SidebarLink>
    </>
  );
};
export default SidebarMenu;