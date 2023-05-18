import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgMobile from '../../images/mobile/background-header.png';

export const Box = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-image: url(${imgMobile});
  background-size: cover;
`;
export const SaidBarNav = styled.div<{ sidebar: boolean }>`
  width: 271px;
  height: 100vh;
  position: fixed;
  background-color: #979797;
  top: 72px;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
`;

export const List = styled.ul`
  color: #fff;
`;
export const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 16px;
  height: 16px;
`;
export const SideBarWrap = styled.div``;
