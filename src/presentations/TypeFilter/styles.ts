import styled from 'styled-components';

interface TypeFilterProps {
  isSelected: boolean;
}

export const TypeFilter = styled.div`
  position: relative;
  display: inline-block;
`;

interface DropdownbtnProps {}

export const Dropdownbtn = styled.div`
  border-radius: 4px;
  border: 1px solid;
  border-color: ${({ isSelected }: TypeFilterProps) =>
    isSelected ? '#008489' : '#dce0e0'};
  padding: 6px 12px;
  background: ${({ isSelected }: TypeFilterProps) =>
    isSelected ? '#008489' : '#fff'};
  color: ${({ isSelected }: TypeFilterProps) =>
    isSelected ? '#fff' : '#484848'};
  font-size: 14px;
  &:hover {
    background: ${({ isSelected }: TypeFilterProps) =>
      isSelected ? '#006c70' : '#f2f2f2'};
    border-color: ${({ isSelected }: TypeFilterProps) =>
      isSelected ? '#006c70' : '#f2f2f2'};
  }
`;

interface DropdownContainerProps {
  isActive: boolean;
}

export const DropdownContainer = styled.div`
  position: absolute;
  border: 1px solid #dce0e0;
  border-radius: 4px;
  ${({ isActive }: DropdownContainerProps) => !isActive && 'display: none;'}
`;

export const DropdownItem = styled.div`
  padding: 6px 12px;
  border-bottom: 1px solid #dce0e0;
  &:last-child {
    border: none;
  }
`;
