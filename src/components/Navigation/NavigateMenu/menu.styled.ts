import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
