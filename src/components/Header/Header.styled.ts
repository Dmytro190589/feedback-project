import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgMobile from '../../images/mobile/background-header.png';

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 16px 24px;
  background-image: url(${imgMobile});
  background-size: cover;
`;
export const SaidBarNav = styled.div`
  width: 271px;
  height: 100vh;
`;

export const List = styled.ul`
  list-style: none;
`;
export const NavIcon = styled(Link)`
  width: 16px;
  height: 16px;
`;
