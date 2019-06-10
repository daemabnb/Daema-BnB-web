import styled, { css } from 'styled-components';

interface TypeButtonProps {
  isSelected: boolean;
}

export const TypeButton = styled.div`
  border-radius: 4px;
  padding: 6px 12px;
  white-space: nowrap;
  font-size: 16px;
  color: #484848;
  cursor: pointer;
  margin-bottom: 12px;

  &:last-child {
    margin: 0;
  }

  &:hover {
    background: #f2f2f2;
  }

  ${({ isSelected }: TypeButtonProps) => css`
    border-color: ${isSelected ? '#008489' : '#dce0e0'};
    background: ${isSelected ? '#008489' : '#fff'};
    color: ${isSelected ? '#fff' : '#484848'};
    &:hover {
      background: ${isSelected ? '#006c70' : '#f2f2f2'};
      border-color: ${isSelected ? '#006c70' : '#f2f2f2'};
    }
  `}
`;
