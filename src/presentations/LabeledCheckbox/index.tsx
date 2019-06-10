import React from 'react';

import * as S from './styles';

interface LabeledCheckboxProps {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

export const LabeledCheckbox: React.FC<LabeledCheckboxProps> = ({
  isChecked,
  onChange,
  label = '',
}) => {
  const toggleCheckboxChange = onChange.bind(null, !isChecked);
  return (
    <S.LabeledCheckbox>
      <S.Checkbox onChange={toggleCheckboxChange} checked={isChecked} />
      <S.Label>{label}</S.Label>
    </S.LabeledCheckbox>
  );
};
