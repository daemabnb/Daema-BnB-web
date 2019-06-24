import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuDialog = styled.div<{ showMenu: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 13;
  bottom: 100%;
  left: 0;
  background-color: #fff;
  transition: bottom 0.2s;
  padding: 102px 24px 24px;
  box-sizing: border-box;

  ${({ showMenu }) =>
    showMenu &&
    css`
      bottom: 0;
    `}
`;

export const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 12px 0;
  color: rgb(72, 72, 72);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
`;
