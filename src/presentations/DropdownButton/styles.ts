import styled, { css } from 'styled-components';

interface DropdownButtonCover {
  isActive: boolean;
}

export const DropdownButtonCover = styled.div`
  width: fit-content;
  position: relative;

  ${({ isActive }: DropdownButtonCover) => css`
    ${DropdownButton} {
      border-color: ${isActive ? '#008489' : '#dce0e0'};
      background: ${isActive ? '#008489' : '#fff'};
      color: ${isActive ? '#fff' : '#484848'};
      &:hover {
        background: ${isActive ? '#006c70' : '#f2f2f2'};
        border-color: ${isActive ? '#006c70' : '#f2f2f2'};
      }
    }
    ${Dropdown} {
      ${!isActive &&
        css`
          visibility: hidden;
        `}
    }
  `}
`;

export const DropdownButton = styled.div`
  border-radius: 4px;
  border: 1px solid;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
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
