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
export const SaidBarNav = styled.div<{ sidebar: number | undefined }>`
  width: 271px;
  height: 100vh;
  position: fixed;
  background-color: #F7F8FD;
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
export const SideBarWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 223px;
  height: 178px;
  flex-wrap: wrap;
  padding: 24px;
`;
export const SidebarLink = styled(Link)`
  color: #4661e6;
  height: 30px;
  background-color: #f2f4ff;
  padding: 6px 16px;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    border-radius: 10px;
    background-color: #4661e6;
    color: #f2f4ff;
  }
`;
export const SidebarLabel = styled.span`
  margin-right: 6px;
`;
export const Item = styled.div`
  width: auto;
`;
