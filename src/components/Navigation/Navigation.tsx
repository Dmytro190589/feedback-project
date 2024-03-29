import { FC, useState } from 'react';

import SideBarMenu from './NavigateMenu/Menu';
import StatusMap from './StatusMap/StatusMap';
import { SidebarData } from 'selectItems/selectItems';
import {
  Box,
  List,
  NavIcon,
  SaidBarNav,
  SideBarWrap,
  BurgerMenu,
  CloseMenu,
} from './Navigation.styled';


const SideBar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <Box>
        <List>
          <li>Frontend Mentor</li>
          <li>FeedBack Board</li>
        </List>
        <NavIcon to="#" onClick={showSideBar}>
          {!sidebar ? <BurgerMenu /> : <CloseMenu />}
        </NavIcon>
      </Box>
      <SaidBarNav sidebar={sidebar ? 1 : undefined}>
        <SideBarWrap>
          {SidebarData.map((item, index) => {
            return <SideBarMenu item={item} key={index} />;
          })}
          <StatusMap />
        </SideBarWrap>
      </SaidBarNav>
    </>
  );
};

export default SideBar;
