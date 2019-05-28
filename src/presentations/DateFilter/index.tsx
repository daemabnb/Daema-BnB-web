import React from 'react';

import * as S from './styles';
import { FilterDropdown } from '../FilterDropdown';

interface DateFilterProps {
  isActive: boolean;
  value?: Date | string;
  onSelectDate?: () => void;
  onToggleFilter: (value: boolean) => void;
}

export const DateFilter: React.FC<DateFilterProps> = ({
  isActive,
  value = '날짜',
  onSelectDate,
  onToggleFilter,
}) => {
  const onClickFilter = onToggleFilter.bind(null, !isActive);
  const isSelected = value !== '날짜';
  return (
    <S.DateFilter onClick={onClickFilter}>
      <S.Dropdownbtn isSelected={isSelected}>{value}</S.Dropdownbtn>
      <FilterDropdown isActive={isActive} />
    </S.DateFilter>
  );
};
