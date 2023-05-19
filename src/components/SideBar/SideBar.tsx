import { FC, useState } from 'react';
import {
  Box,
  List,
  NavIcon,
  SaidBarNav,
  SideBarWrap,
} from '../Sidebar/SideBar.styled';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

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
      <SaidBarNav sidebar={sidebar}>
        <SideBarWrap></SideBarWrap>
      </SaidBarNav>
    </IconContext.Provider>
  );
};

export default SideBar;
