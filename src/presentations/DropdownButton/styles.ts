import styled, { css } from 'styled-components';

interface DropdownButtonCover {
  isActive: boolean;
}

export const DropdownButtonCover = styled.div`
  width: fit-content;
  position: relative;
  margin: 0 4px;

  &:first-child {
    margin-left: 0px;
  }

  ${({ isActive }: DropdownButtonCover) => css`
    ${Dropdown} {
      ${!isActive &&
        css`
          visibility: hidden;
        `}
    }
  `}
`;

interface DropdownButtonProps {
  hasValue: boolean;
  isActive: boolean;
}

export const DropdownButton = styled.div<DropdownButtonProps>`
  border-radius: 4px;
  border: 1px solid;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;

  border-color: #dce0e0;
  background: #fff;
  color: #484848;
  &:hover {
    background: #f2f2f2;
    border-color: #f2f2f2;
  }

  ${({ hasValue, isActive }) =>
    (hasValue || isActive) &&
    css`
      border-color: #008489;
      background: #008489;
      color: #fff;
      &:hover {
        background: #006c70;
        border-color: #006c70;
      }
    `}
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  padding: 24px;
  left: 0;
  border: 1px solid #dce0e0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 36px 2px;
  background: #fff;
`;
