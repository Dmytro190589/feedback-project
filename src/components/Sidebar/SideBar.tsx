import { FC, useState } from 'react';

import { Box, List, NavIcon, SaidBarNav, SideBarWrap } from './SideBar.styled';

import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './sideBarData';
import SidebarMenu from './sideBarMenu';
import RoadMap from './RoadMap';

const SideBar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: 'fff' }}>
      <Box>
        <List>
          <li>Frontend Mentor</li>
          <li>FeedBack Board</li>
        </List>
        <NavIcon to="#" onClick={showSideBar}>
          {!sidebar ? <AiOutlineMenu /> : <AiOutlineClose />}
        </NavIcon>
      </Box>
      <SaidBarNav sidebar={sidebar ? 1 : undefined}>
        <SideBarWrap>
          {SidebarData.map((item, index) => {
            return <SidebarMenu item={item} key={index} />;
          })}
          <RoadMap />
        </SideBarWrap>
      </SaidBarNav>
    </IconContext.Provider>
  );
};

export default SideBar;
