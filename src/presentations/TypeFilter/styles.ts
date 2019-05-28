import styled from 'styled-components';

export const TypeFilter = styled.div`
  position: relative;
  display: inline-block;
`;

interface DropdownbtnProps {
  isSelected: boolean;
}

export const Dropdownbtn = styled.div`
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ isSelected }: DropdownbtnProps) =>
    isSelected ? '#008489' : '#dce0e0'};
  padding: 6px 12px;
  background: ${({ isSelected }: DropdownbtnProps) =>
    isSelected ? '#008489' : '#fff'};
  color: ${({ isSelected }: DropdownbtnProps) =>
    isSelected ? '#fff' : '#484848'};
  font-size: 14px;
  &:hover {
    background: ${({ isSelected }: DropdownbtnProps) =>
      isSelected ? '#006c70' : '#f2f2f2'};
    border-color: ${({ isSelected }: DropdownbtnProps) =>
      isSelected ? '#006c70' : '#f2f2f2'};
  }
`;

export const DropdownItem = styled.div`
  padding: 6px 12px;
  white-space: nowrap;
  font-size: 16px;
  color: #484848;
`;
