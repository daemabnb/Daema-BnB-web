import styled from 'styled-components';

interface FilterDropdownProps {
  isActive: boolean;
}

export const FilterDropdown = styled.div`
  position: absolute;
  top: 40px;
  padding: 24px;
  left: 0;
  border: 1px solid #dce0e0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 36px 2px;
  overflow-x: hidden;
  max-height: calc(100vh - 152px);
  background: #fff;
  ${({ isActive }: FilterDropdownProps) => !isActive && 'display: none;'}
`;
