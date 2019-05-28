import React from 'react';

import * as S from './styles';
import { FilterDropdown } from '../FilterDropdown';

interface TypeFilterProps {
  isActive: boolean;
  value?: string;
  contentItems: string[];
  onSelectType: (value: string) => void;
  onToggleFilter: (value: boolean) => void;
}

export const TypeFilter: React.FC<TypeFilterProps> = ({
  isActive,
  value = '타입',
  contentItems,
  onSelectType,
  onToggleFilter,
}) => {
  const isSelected = value !== '타입';
  const dropdownItems = contentItems.map((content, i) => (
    <S.DropdownItem key={i} onClick={onSelectType.bind(null, content)}>
      {content}
    </S.DropdownItem>
  ));
  const onClick = onToggleFilter.bind(null, !isActive);
  return (
    <S.TypeFilter onClick={onClick}>
      <S.Dropdownbtn isSelected={isSelected}>{value}</S.Dropdownbtn>
      <FilterDropdown isActive={isActive}>{dropdownItems}</FilterDropdown>
    </S.TypeFilter>
  );
};
