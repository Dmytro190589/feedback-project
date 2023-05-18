import { FC } from 'react';
import { Box, List, NavIcon, SaidBarNav } from './Header.styled';
import { IconContext } from 'react-icons';
import { AiOutlineMenu } from 'react-icons/ai';
const Header: FC = () => {
  return (
    <IconContext.Provider value={{ color: 'fff' }}>
      <Box>
        <List>
          <li>Frontend Mentor</li>
          <li>FeedBack Board</li>
        </List>
        <NavIcon to="#">
          <AiOutlineMenu />
        </NavIcon>
      </Box>
      <SaidBarNav></SaidBarNav>
    </IconContext.Provider>
  );
};

export default Header;
